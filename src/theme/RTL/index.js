import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';

// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

export default function RTL(props) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}