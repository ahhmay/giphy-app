import { useContext } from 'react';
import ThemeContext from '../../common/ThemeContext';
import './LoadingGif.css';

const LoadingGif = () => {
    const themeobj = useContext(ThemeContext);

    return (
        <>
            {
                themeobj.darkTheme ? <img className="center" src="https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif" width="200" height="200" alt="darkLine"/>
                    : <img className="center" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" width="200" height="200" alt="lightLine"/>
            }
        </>
    )
}
export default LoadingGif;