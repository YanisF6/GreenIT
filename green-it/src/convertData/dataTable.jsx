import React from 'react'
import JsonData from './data.json'
function JsonDataDisplay() {
    // const DisplayData = JsonData.filter(
    //     (info) => info.nomCom == "Accolans").map((info) => {
    //         return (
    //             <tr>
    //                 <td>{info.nomCom}</td>
    //                 <td>{info.codeIris}</td>
    //                 <td>{info.classementScoreGlobal}</td>
    //                 <td>{info.nomIris}</td>
    //                 <td>{info.population}</td>
    //                 <td>{info.ScoreGlobal}</td>
    //                 <td>{info.accesAuxInterfacesNumeriques}</td>
    //                 <td>{info.accesInformation}</td>
    //                 <td>{info.competencesAdministratives}</td>
    //             </tr>
    //         )
    //     }
    //     )
    const DisplayData = JsonData.filter((elt) => elt.nomCom.charAt(0) == 'A' && elt.nomCom.charAt(1) == 'a').map(
        (info) => {
            return (
                <tr>
                    <td>{info.nomCom}</td>
                    <td>{info.codeIris}</td>
                    <td>{info.classementScoreGlobal}</td>
                    <td>{info.nomIris}</td>
                    <td>{info.population}</td>
                    <td>{info.ScoreGlobal}</td>
                    <td>{info.accesAuxInterfacesNumeriques}</td>
                    <td>{info.accesInformation}</td>
                    <td>{info.competencesAdministratives}</td>
                </tr>
            )
        }
    );
    /*const DisplayData = JsonData.map(
        (info) => {
            return (
                <tr>
                    <td>{info.nomCom}</td>
                    <td>{info.codeIris}</td>
                    <td>{info.classementScoreGlobal}</td>
                    <td>{info.nomIris}</td>
                    <td>{info.population}</td>
                    <td>{info.ScoreGlobal}</td>
                    <td>{info.accesAuxInterfacesNumeriques}</td>
                    <td>{info.accesInformation}</td>
                    <td>{info.competencesAdministratives}</td>
                </tr>
            )
        }
    )*/

    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nom Com</th>
                        <th>Code Iris</th>
                        <th>Classement Score</th>
                        <th>Nom Iris</th>
                        <th>Population</th>
                        <th>Score Global</th>
                        <th>Accès aux interfaces numériques</th>
                        <th>Accès à l'information</th>
                        <th>Competences administratives</th>
                    </tr>
                </thead>
                <tbody>


                    {DisplayData}

                </tbody>
            </table>

        </div>
    )
}

export default JsonDataDisplay;
