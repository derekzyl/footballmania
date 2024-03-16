const cloudinaryPrefix = 'https://res.cloudinary.com/demo/image/fetch';

///w_200,f_auto,q_100/

export const cloudinary = (url: string, width: number) => {
  return `${cloudinaryPrefix}/f_auto,q_100,w_${width}/${url}`;
};
