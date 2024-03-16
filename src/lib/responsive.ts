import {Dimensions, PixelRatio} from 'react-native';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const responsive = {
  /**
   *  Converts provided width percentage to independent pixel (dp).
   * @name width  Used for responsive width across devices
   * @param widthPercent - 10% or 10
   * @return {number} The calculated dp depending on current device's screen height.
   */
  width: function (widthPercent: number | string): number {
    const elementWidth =
      typeof widthPercent === 'number'
        ? widthPercent
        : parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(screenWidth * (elementWidth / 100));
  },

  /**
   *  Converts provided height percentage to independent pixel (dp).
   * @name height  Used for responsive height across devices
   * @param heightPercent - 10% or 10
   * @return {number} The calculated dp depending on current device's screen height.
   */
  height: function (heightPercent: number | string): number {
    const elementHeight =
      typeof heightPercent === 'number'
        ? heightPercent
        : parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(screenHeight * (elementHeight / 100));
  },
};

export default responsive;
