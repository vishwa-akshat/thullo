// Utility function to calculate the contrast ratio between two colors
export function getContrastRatio(color1: any, color2: any) {
    const lum1 = getRelativeLuminance(color1);
    const lum2 = getRelativeLuminance(color2);
    const lightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (lightest + 0.05) / (darkest + 0.05);
}

// Utility function to calculate the relative luminance of a color
export function getRelativeLuminance(color: any) {
    const rgba = parseColor(color);
    const gammaCorrectedRGB = rgba.map((channel) => {
        const channelLinear = channel / 255;
        return channelLinear <= 0.03928
            ? channelLinear / 12.92
            : Math.pow((channelLinear + 0.055) / 1.055, 2.4);
    });
    return (
        0.2126 * gammaCorrectedRGB[0] +
        0.7152 * gammaCorrectedRGB[1] +
        0.0722 * gammaCorrectedRGB[2]
    );
}

// Utility function to parse a color string into an RGBA array
export function parseColor(color: string) {
    const hexMatch = color.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    if (hexMatch) {
        const hex = hexMatch[1];
        if (hex.length === 6) {
            return [
                parseInt(hex.slice(0, 2), 16),
                parseInt(hex.slice(2, 4), 16),
                parseInt(hex.slice(4, 6), 16),
                255,
            ];
        } else if (hex.length === 3) {
            return [
                parseInt(hex[0] + hex[0], 16),
                parseInt(hex[1] + hex[1], 16),
                parseInt(hex[2] + hex[2], 16),
                255,
            ];
        }
    }
    return [0, 0, 0, 255]; // Return black as default
}
