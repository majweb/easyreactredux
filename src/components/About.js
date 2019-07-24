import React from 'react';
import Rainbow from '../hoc/Rainbow';
import '../../src/index.css';

const about = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>page about Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym,</p>
        </div>
    )
}
export default Rainbow(about);