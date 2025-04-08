import React from "react";
import "../App.css";
import OneofMains from "./oneofmains";

const Main =  () => {
    return(
        <OneofMains
            title="IDK"
            subtitles={[
                "Umweltproteste in Usbekistan und ihre Relevanz",
                "Können Umweltproteste wirklich etwas bewirken?",
                "Abhängigkeit von fossilen Brennstoffen",
                "Erfolge der Fridays-for-Future-Bewegung",
                "Bedeutung von Umweltprotesten",
                "Einfluss auf die Macht"
            ]}
            texts={[
                "In Usbekistan sind Umweltproteste leider noch kein weitverbreitetes Thema. Dabei ist es gerade in Zeiten des Klimawandels wichtig, dass auch wir beginnen, uns mit solchen Themen auseinanderzusetzen und öffentlich Stellung zu nehmen. Wir haben dieses Thema gewählt – weil es aktuell ist, diskutiert wird und auch bei uns mehr Aufmerksamkeit verdient.",
                "Die Frage, ob die Umweltproteste tatsächlich den Klimaschutz vorantreiben können, ist gegenwärtig definitiv weitverbreitet. Demonstrationen für Umweltschutz sind längst fester Bestandteil der gesellschaftlichen Debatte geworden. Bewegungen wie Fridays for Future zeigen, dass insbesondere junge Menschen bereit sind, sich aktiv für den Klimaschutz einzusetzen. Doch bleibt die entscheidende Frage: Können solche Proteste tatsächlich zu konkreten Maßnahmen führen, oder bleiben sie bloß ein Zeichen des Widerstands?",
                "Eines der größten Umweltprobleme unserer Zeit ist die anhaltende Abhängigkeit von fossilen Brennstoffen. Trotz zahlreicher Klimaversprechen vieler Regierungen werden weiterhin neue Infrastrukturen für fossile Energiequellen errichtet. Dies führt zu steigenden CO₂-Emissionen und beschleunigt den Klimawandel. Ein Beispiel ist Deutschland, wo zwar der Kohleausstieg beschlossen wurde, aber gleichzeitig neue Projekte zur Nutzung fossiler Energieträger wie Gas umgesetzt werden, zum Beispiel durch den Bau neuer Gaskraftwerke.",
                "Proteste wie die von Fridays for Future haben bereits bewiesen, dass sie Veränderungen anstoßen können. Durch ihren Druck wurden Klimaziele verschärft, erneuerbare Energien stärker gefördert und Investoren zum Umdenken bewegt. Ein Beispiel dafür ist die Entscheidung der Europäischen Investitionsbank im Jahr 2020, keine fossilen Projekte mehr zu finanzieren, was einen bedeutenden Erfolg für den Klimaschutz darstellt und ohne kontinuierlichen Protest kaum möglich gewesen wäre. Darüber hinaus sensibilisieren solche Proteste die Gesellschaft und erhöhen den politischen Druck, sodass Klimaschutz nicht mehr ignoriert werden kann.",
                "Das Beispiel zeigt, dass Umweltproteste nicht nur symbolisch sind, sondern tatsächlich Veränderungen bewirken können. Sie setzen Themen auf die politische Agenda, steigern das Bewusstsein der Gesellschaft und üben Druck auf Entscheidungsträger aus. Auch wenn Proteste allein nicht ausreichen, um den Klimawandel zu stoppen, sind sie ein unverzichtbarer Teil des gesellschaftlichen Engagements für eine nachhaltige Zukunft.",
                "Wie wir gesehen haben, können Umweltproteste nicht nur Veränderungen im Bereich des Klimaschutzes bewirken, sondern auch das gesellschaftliche Bewusstsein stärken. Doch Proteste richten sich oft nicht nur an die Bevölkerung, sondern vor allem an Entscheidungsträger. Deshalb folgt nun der Aspekt, wie Protestbewegungen die Haltung und das Handeln der Macht beeinflussen können."
            ]}
        />
    )
}

export default Main;