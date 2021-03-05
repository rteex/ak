import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';
import { AUTOS } from '../data/autos.js'

var autoStatus = 'OK';

function hyphenateDateString(target) {
    let s = target.substr(0, 4) + "-" + target.substr(4, 2) + "-" + target.substr(6, 2);
    return s;
}

function compareDates(startDate, endDate) {

    let dStart = new Date(startDate);
    let dEnd = new Date(endDate);
    let elapsed = dEnd - dStart;
    let totalMonths = Math.floor(elapsed / 2592000000);
    let years = Math.floor(totalMonths / 12);
    let months = totalMonths % 12;

    return {
        totalMonths,
        years,
        months
    };
}

function warningEnsirekisterointi(startDate, endDate) {

    let { totalMonths, years, months } = compareDates(startDate, endDate);
    console.log("totalMonths " + totalMonths + ", years " + years + ", months " + months);

    if (totalMonths >= 3 && totalMonths < 6) {
        return "Ensirekisteröinti ja käyttöönottopäivät eroavat toisistaan (" + startDate + " - " + endDate + ").";
    }
    if (totalMonths >= 6 && totalMonths < 12) {
        return "Ensirekisteröinti ja käyttöönottopäivä eroavat yli 6 kuukautta (" + startDate + " - " + endDate + ").";
    }
    if (totalMonths >= 12) {
        return "Ensirekisteröinti ja käyttöönottopäivä eroavat yli vuodella (" + startDate + " - " + endDate + ").";
    } else {
        return ""
    }
}

function warningHuomautus(note) {
    /* const noteString = note + ''
    console.log('warningHuomautus, noteString.length', noteString.length, '>'+noteString+'<', '>'+note+'<')
    if (noteString.length > 0) { */
    if (note === undefined) {
        return ""
    } else {
        return (<p><h5>&bull; {note} </h5></p>)
    }
}

function determineAutoStatus(auto) {
    const allWarnings = auto.kehys.yleinen.fixThis + auto.kehys.yleinen.fixThis2 + auto.kehys.yleinen.fixThis3
    if (allWarnings.length > 0) {
        autoStatus = 'beware'
    } else {
        autoStatus = 'OK'
    }
}

function showWarning(auto) {
    if (autoStatus === 'beware') {
        return (<p><img src='assets/images/danger.png' alt=""></img></p>)
    }
}

function showMoreWarningInfo(auto) {
    if (autoStatus === 'beware') {
        return (<p>Lue lisää varoituksista...</p>)
    }
}

function findAuto(regNumber) {
    const result = AUTOS.filter(auto => auto.id === regNumber)[0];
    return result;
}

function Brief(props) {
    console.log('Brief', props.regNumber)
    const auto = findAuto(props.regNumber)
    determineAutoStatus(auto)

    if (auto != null) {
        return (
            <div className="container">
                <h3>Yhteenveto </h3>
                <ul className="list-unstyled">
                    <li key={auto.id}>
                        <p><h4>{auto.id} - {auto.kehys.sanoma.ajoneuvontiedot.laaja.ajoneuvonTiedot.merkkiSelvakielinen} {auto.kehys.sanoma.ajoneuvontiedot.laaja.ajoneuvonTiedot.mallimerkinta}</h4></p>
                        {showWarning(auto)}
                        {warningHuomautus(auto.kehys.yleinen.fixThis)}
                        {warningHuomautus(auto.kehys.yleinen.fixThis2)}
                        {warningHuomautus(auto.kehys.yleinen.fixThis3)}
                        <p><h5>&bull; {warningEnsirekisterointi(auto.kehys.sanoma.ajoneuvontiedot.laaja.ajoneuvonPerustiedot.ensirekisterointipvm,
                            hyphenateDateString(auto.kehys.sanoma.ajoneuvontiedot.laaja.ajoneuvonPerustiedot.kayttoonottopvm))}
                        </h5></p>
                        {showMoreWarningInfo()}
                        {/* <p><img src='assets/images/think.jpg' alt=""></img></p> */}
                    </li>
                </ul>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardTitle><h4>Tärkeät päivämäärät</h4></CardTitle>
                                <CardText>Ensirekisteröinti {auto.kehys.sanoma.ajoneuvontiedot.laaja.ajoneuvonPerustiedot.ensirekisterointipvm}</CardText>
                                <CardText>Käyttöönottopäivä {hyphenateDateString(auto.kehys.sanoma.ajoneuvontiedot.laaja.ajoneuvonPerustiedot.kayttoonottopvm)}</CardText>
                                <CardText>Katsastettu {auto.kehys.sanoma.ajoneuvontiedot.laaja.ajoneuvonPerustiedot.katsastusajankohta}</CardText>
                                <CardText>Katsastuspäätös {auto.kehys.sanoma.ajoneuvontiedot.laaja.ajoneuvonPerustiedot.katsastuspaatos}</CardText>
                                <CardText>Viimeisin omistajanvaihdos {auto.kehys.sanoma.ajoneuvontiedot.laaja.omistajatHaltijat.omistajaHaltija.suhteenAlkupvm}</CardText>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardTitle><h4>Tekniikka</h4></CardTitle>
                                <CardText>Iskutilavuus cm3 {auto.kehys.sanoma.ajoneuvontiedot.laaja.moottori.iskutilavuus}</CardText>
                                <CardText>Teho kW {auto.kehys.sanoma.ajoneuvontiedot.laaja.moottori.suurinNettoteho}</CardText>
                                <CardText>Käyttövoima Bensiini</CardText>
                                <CardText>Vaihteisto Manuaalinen</CardText>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardTitle><h4>Omistajat ja haltijat</h4></CardTitle>
                                <CardText>Omistaja {auto.kehys.sanoma.ajoneuvontiedot.laaja.omistajatHaltijat.omistajaHaltija.sukunimiPaayksikko}, {auto.kehys.sanoma.ajoneuvontiedot.laaja.omistajatHaltijat.omistajaHaltija.etunimiAlayksikko}</CardText>
                                <CardText>Lähiosoite {auto.kehys.sanoma.ajoneuvontiedot.laaja.omistajatHaltijat.omistajaHaltija.lahiosoite}</CardText>
                                <CardText>Postinumero {auto.kehys.sanoma.ajoneuvontiedot.laaja.omistajatHaltijat.omistajaHaltija.postinumero}</CardText>
                                <CardText>Toimipaikka {auto.kehys.sanoma.ajoneuvontiedot.laaja.omistajatHaltijat.omistajaHaltija.postitoimipaikka}</CardText>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardTitle><h4>Painot ja mitat</h4></CardTitle>
                                <CardText>Omapaino {auto.kehys.sanoma.ajoneuvontiedot.laaja.massa.omamassa}</CardText>
                                <CardText>Kokonaispaino {auto.kehys.sanoma.ajoneuvontiedot.laaja.massa.teknSuurSallKokmassa}</CardText>
                                <CardText>Vetopaino ilman jarruja {auto.kehys.sanoma.ajoneuvontiedot.laaja.kevyenKytkenta.massaJarruittaValmSall}</CardText>
                                <CardText>Vetopaino jarruilla {auto.kehys.sanoma.ajoneuvontiedot.laaja.kevyenKytkenta.massaJarruinValmSall}</CardText>
                                <CardText>Pituus {auto.kehys.sanoma.ajoneuvontiedot.laaja.mitat.ajonKokPituus}</CardText>
                                <CardText>Leveys {auto.kehys.sanoma.ajoneuvontiedot.laaja.mitat.ajonLeveys}</CardText>
                                <CardText>Korkeus {auto.kehys.sanoma.ajoneuvontiedot.laaja.mitat.ajonKorkeus}</CardText>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardTitle><h4>Jne...</h4></CardTitle>
                            </Card>
                        </div>                        
                    </div>
                </div>
            </div>
        )
    } else {
        return (
                <div className="container">
                    <h4>Sikaa {props.regnumber} ei löydy</h4>
                    <p><img src='assets/images/danger.png' alt=""></img></p>
                </div>
        )
    }
}

export default Brief;    