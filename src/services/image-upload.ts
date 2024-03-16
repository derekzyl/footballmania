import axios from 'axios';

class CloudinaryRequest {
  CLOUDINARY_CLOUD_NAME = 'ninja-dev';
  CLOUDINARY_UPLOAD_PRESET = 'rutopay';
  url = `https://api.cloudinary.com/v1_1/${this.CLOUDINARY_CLOUD_NAME}/image/upload`;

  async upload(photo: any, onSuccess: any, onError: any) {
    const uri = photo.uri;
    const type = photo.type;
    const name = photo.fileName;
    const source = {
      uri,
      type,
      name,
    };

    const formData = new FormData();
    formData.append('file', source);
    formData.append('upload_preset', this.CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await axios.post(this.url, formData, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
      });

      const {secure_url} = await response.data;
      const res = {status: true, url: secure_url};
      onSuccess(res);
    } catch (error) {
      const res = {status: false, msg: error.response.message};
      onError(res);
    }
  }
}

const cloudinaryRequest = new CloudinaryRequest();
export default cloudinaryRequest;
