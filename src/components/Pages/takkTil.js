import React, { Component } from 'react';
import PersonCard from '../divPageComp/personCard'
import andreasB2 from "../../lib/andreasB2.jpg"
import joar from '../../lib/joar.jpg'
import fredrik from '../../lib/fredrik.JPG'
import dennis from '../../lib/dennis.PNG'
import filip from '../../lib/filip.PNG'
import aleks from '../../lib/aleks.PNG'



class TakkTil extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className ={"bodyTakkTil"}>
                <PersonCard personName={"Andreas Bøe"}
                            desc={"Hjupet med enormt engasjement og utrolige menger positive ord, komplimenter og ordtak"}
                            date={"31.08.2019"}
                            img = {andreasB2}
                />
                <PersonCard personName={"Joar Hougen"}
                            desc={"Støtte, idéer, mat og domenekunnskap"}
                            date={"15.08.2004"}
                            img = {joar}
                />
                <PersonCard personName={"Fredrik Hyldmo"}
                            desc={"Kreativitet, Innovasjon og kritikk"}
                            date={"15.08.2005"}
                            img = {fredrik}
                />
                <PersonCard personName={"Dennis Aleksander Janzso"}
                            desc={"Perspektiv, positivitet og samfunnskritikk"}
                            date={"15.08.2017"}
                            img = {dennis}
                />
                <PersonCard personName={"Filip Johansen"}
                              desc={"Klaging, morsomheter og idioti"}
                              date={"15.08.2017"}
                              img = {filip}
                />
                <PersonCard personName={"Aleksander Scherman Olsen"}
                            desc={"Kloke ord og gode historier"}
                            date={"15.08.2017"}
                            img = {aleks}
                />
            </div>
        );
    }
}

export default TakkTil;