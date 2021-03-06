import getViewportSize from './get-viewport-size';


/**
 * Checks if the provided string is a valid device name contained in the screen size database.
 * @function
 * @name isValidDeviceName
 * @param {string} inputString - The string to be validated.
 * @returns {boolean} `true` if the specified string is a valid device name.
 */
export default function (inputString) {
    return !!getViewportSize(inputString);
}
