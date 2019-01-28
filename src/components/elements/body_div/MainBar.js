import React from 'react';
import './body_css/body_div.css'
import img1 from "../../../images/str_drell1.jpeg";
import img2 from "../../../images/str_drell2.jpeg";
import img3 from "../../../images/str_drell3.jpeg";
import img4 from "../../../images/str_generator1.jpeg"
import img5 from "../../../images/str_generator2.jpeg";
import img6 from "../../../images/str_generator3.jpeg";
import img7 from "../../../images/str_lesa1.jpg";
import img8 from "../../../images/str_lesa2.jpg";
import img9 from "../../../images/str_lesa3.jpeg";
import img10 from "../../../images/str_lom1.jpeg";
import img11 from "../../../images/str_lom2.jpeg";
import img12 from "../../../images/str_opalubki4.jpeg";
import img13 from "../../../images/str_teplopushka1.jpeg";
import img14 from "../../../images/str_teplopushka2.jpeg";
import img15 from "../../../images/str_lopaty1.jpeg";
import img16 from "../../../images/str_lopaty2.jpeg";
import img17 from "../../../images/str_meshalka1.jpeg";
import img18 from "../../../images/str_meshalka2.jpeg";
import img19 from "../../../images/str_meshalka3.jpg";
import img20 from "../../../images/str_opalubki1.jpeg";
import img21 from "../../../images/str_opalubki2.jpeg";
import img22 from "../../../images/str_opalubki3.jpg"
import img23 from "../../../images/str_teplopushka3.jpeg";
import img24 from "../../../images/str_trombator.jpeg";
import img25 from "../../../images/str_trombator2.jpeg";
import img26 from "../../../images/str_trombator3.jpeg";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';



const MainBar = () => {

    return (
        <div className='MainBar'>
            <Slider>
                <img alt='img' src={img1}/>
                <img alt='img' src={img2}/>
                <img alt='img' src={img3}/>
                <img alt='img' src={img4}/>
                <img alt='img' src={img5}/>
                <img alt='img' src={img6}/>
                <img alt='img' src={img7}/>
                <img alt='img' src={img8}/>
                <img alt='img' src={img9}/>
                <img alt='img' src={img10}/>
                <img alt='img' src={img11}/>
                <img alt='img' src={img12}/>
                <img alt='img' src={img13}/>
                <img alt='img' src={img14}/>
                <img alt='img' src={img15}/>
                <img alt='img' src={img16}/>
                <img alt='img' src={img17}/>
                <img alt='img' src={img18}/>
                <img alt='img' src={img19}/>
                <img alt='img' src={img20}/>
                <img alt='img' src={img21}/>
                <img alt='img' src={img22}/>
                <img alt='img' src={img23}/>
                <img alt='img' src={img24}/>
                <img alt='img' src={img25}/>
                <img alt='img' src={img26}/>
            </Slider>
        </div>
    );
};

export default MainBar;