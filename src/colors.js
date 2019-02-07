A single color within the palette is made up of a hue such as "red", and shade,
 such as "500". "red 50" is the lightest shade of red (pink!), while "red 900" is the darkest. 
 In addition, most hues come with "accent" shades, prefixed with an A.
 
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

const primary = red[500]; // #F44336
const accent = purple['A200']; // #E040FB
const accent2 = purple.A200; // #E040FB (alternative method)