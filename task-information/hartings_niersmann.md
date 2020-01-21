# Vollständigkeit: Werden alle geforderten Eigenschaften und Aussagen im Entwurf behandelt?

## Werden alle fachlichen Anforderungen berücksichtigt?

Alle fachlichen Anforderungen werden (mehr oder weniger) berücksichtigt. So wird in den Wireframes gezeigt,
dass der Info-Bereich für Besucher und Tagungsteilnehmer umgesetzt werden soll.
Der zweite Teil "Registrierungsbereich für Tagungsteilnehmer" wird ebenfalls in den Wireframes berücksichtigt,
wenn auch die Registrierung selbst nur indirekt durch "Registrierung bestätigen" angeführt wird.

## Werden alle nichtfachlichen Anforderungen berücksichtigt?

Die nichtfachliche Anforderung nach einer webbasierten Lösung wird umgesetzt.
Neben diesem ist in der Ausführung eine NoSQL Datenbank (MongoDB) berücksichtigt.

Die Anforderung, dass die Anwendung nur im Intranet verfügbar ist,
wird nicht explizit in der Dokumentation berücksichtigt,
dies kann unserer Meinung nach als nebensächlich Betracht werden,
da die Umsetzung diese Anforderung auch durch eine Webserverkonfiguration möglich ist und
so kein Bestandteil der zu realisieren Anwendung darstellt.

# Konsistenz: passen Aufteilung in Komponenten, Entwurf Benutzungsschnittstelle und Datenmodell (Klassendiagramm) zusammen?

Das Klassendiagramm stellt nur die Klassen der Datenbank und nicht der Applikation an sich dar.
Es fehlen Funktionen, um die im Komponentendiagramm beschrieben Leistungnen umzusetzen,
so wird im Klassendiagramm die im Komponentendiagramm beschriebene Leistung "Registrierung",
"Login" und "Logout" nicht berücksichtigt.
Auch wird die im Wireframe angeführte Funktion "Mahen" nicht im Klassendiagramm berücksichtigt.

Die im Klassendiagramm verwendete Funktion "abbuchen" scheint ohne Import von Komponenten einer Bank zu funktionieren,
zumindest fehlt ein solcher Import im Komponentendiagramm.

In den Wireframes werden die Verwaltung von Räumen, Mitarbeitern und
die Möglichkeit eines Abbuchens (sofern dieses nicht nur automatisch geschehen soll) nicht realisiert.

# Umsetzbarkeit: sind die Angaben geeignet als Vorgabe für die Implementierung?

## Ist die Systemarchitektur verständlich angegeben?

Das Komponentendiagramm zeigt nicht auf was exportiert wird,
beziehungsweise exportieren die verschiedenen Module oftmals dieselben Klassen.
Beim Import wird nicht klar welches Modul die Klasse bereitstellt.

Es wird nicht klar, wo das User-Interface gebaut/gerendert wird und
an welches technische System die Webapplikation ihre Leistungen anbietet.

Die Darstellung des Sequenzidiagrammes des Logins hätte durch einen beschreibenden Text erklärt werden müssen,
so ist nicht nachvollziehbar wie der Login abläuft.
Warum erhält der Server die Session und welche Bedeutung hat die MapMetadata.

Auch wird meistens nicht klar, woher Daten (bspw. aktuelle Hinweise) stammen, da diese keine Quelle haben.

Des Weiteren wird das Rest-Interface über Publish-Subscribe nicht erläutert (siehe unten).

## Ist die Systemarchitektur geeignet?

Nein, da ein Publish-Subscribe Muster zwischen HTTP-Server und HTTP-Client ungeeignet ist.
Der Server ist in der Regel nicht in der Lage dem Client ohne Anforderung Daten zu übermitteln.
Sollten Websockets eingesetzt werden wird dieses hier nicht beschrieben.

Des Weitern wird im Komponentendiagramm dargestellt, dass der Web-Server nur Daten aus der Datenbank abrufen kann.
Veränderungen, Löschung oder Erstellung sind nicht möglich.

## Ist die Systemarchitektur ausreichend detailliert angegeben?

Die Beschreibung der Systemarchitektur lässt viele Fragen unbeantwortet. Das Komponentendiagramm ist nicht detailliert
und hilft so nicht beim Verständnis.
Die Verwendung von Publish-Subscribe im Kontext der Webanwendung wird nicht ausgeführt und trägt so zum Unverständnis,
nicht zu einer einfacheren standardisierten Lösung, bei.

Auch fehlen zu den verschiedenen Komponenten detaillierte Beschreibungen.
Dazu zahlen unter anderem genau Definitionen der Export- und Importschnittstellen sowie deren Datenstrukturen.

Wie bereits erwähnt sind alle Diagramme sehr sehr oberflächlich gehalten,
es fehlen zu allen Diagrammen erläuternde Beschreibungen. 

## Berücksichtigt die Systemarchitektur Aspekte der technischen Umsetzung ausreichend?

## Sind die Entwürfe zur Benutzungsschnittstelle als Implementierungsvorgabe geeignet?

Es besteht die Möglichkeit einer Implementierung (gewisser Teile) der Benutzungsschnittstelle,
jedoch wirken die Wireframes hastig fertiggestellt.
Beispielsweise wird nicht klar, ob Texte von Buttons horizontal zum gesamten Text oder zur ersten Zeile zentriert sind.
Auch sind die Platzhaltertexte unsere Meinung nach nicht professionell gewählt.

Die zu den verschiedenen Wireframes gehörenden Rollen werden nicht durch passende Bildunterschriften
oder Erklärungen deutlich gemacht.
So ist es nicht möglich zu bestimmen welche Rolle die Berechtigung für eine spezielle Seite hat.

Eine Registrierung und der Login werden im Wireframe nicht berücksichtigt,
es gibt nur einen Button mit der Aufschrift "Login".

Anzumerken ist auch, dass bei gleichem Grundlayout die Wireframes modular aufgebaut werden können.
Des Weiteren wird nicht klar, ob das nicht anzeigen des "aktuellen Tabs" eine Designentscheidung ist.

### Anmerkung zu den einzelnen Wireframes
* Wireframe_Home (gleichzeitig Aktuelle Hinweise)
        * Kann auf dieser Seite nur ein Hinweis existieren oder sind auch mehrere möglich?
    * Wireframe_Tagungsübersicht
        * Art der Tagungseinheit & Redner / Autoren fehlt
        * Soll es eine Detailansicht geben, dann würde das Wireframe fehlen
    * Wireframe_Leistungsübersicht
        * Ist es Zufall, dass die Leistungsübersicht nur Teil von der Tagungsübersicht ist?
    * Wireframe_Leistungen_buchen
        * Warum gibt es hier wieder mehr Leistungen als im anderen Wireframe
        * Gibt es eine Bestätigungsabfrage, bevor die Buchung ausgeführt wird?
    * Wireframe_Spezielle_hinweise
        * Was ist der Unterschied zwischen dem aktuellem und speziellem Hinweise?
    * Wireframe_tagungsmanager
        * Designentscheidung, dass die Buttons nicht mittig sind?
    * Wireframe_Tagungsmangererstellen
        * Sind alle Felder pflicht?
        * Wo werden die Räume für das Dropdown verwaltet?
    * Wireframe_Tagungsprogramm    
        * Wirwar im Wireframe ohne Login kann ein Tagungsprogramm erstellt werden
        * Das UI erlaubt eine Erstellung nicht
    * Wireframe_Berechtigungen_verwalten
        * Was bedeutet hochstufen?
        * Gibt es auch ein runterstufen?
        * Welche Rolle darf die Funktion nutzen?
    * Wireframe_Buchungen_verwalten
        * Ist die Tabelle extra nicht die volle Breite?
    * Wireframe_registrierungen_verwalten
        * Ist die Tabelle extra nicht die volle Breite?
    * Wireframe_Zahlungen_verwalten
        * Wo kommt die Funktion Mahnen her? Was macht diese?

## Ist die Definition und Beschreibung des Datenmodells für die Implementierung ausreichend?

Die Definition ist teilweise ausreichend, da auch hier noch annahmen getroffen werden müssen.

Beispielsweise muss angenommen werden, dass der Object-Name in Form von Nummern die ID der klasse darstellen soll,
dessen Name nur aus Referenzen oder dem Klassendiagramm erschließbar ist.
Auch ist bei Werten wie Zahlungsform nicht klar was in dieser Variable gespeichert werden soll,
außer einer ID mit String als Value.

Wie auch bei den Diagrammen fehlt hier eine gute Beschreibung.
        
# Folgende Fragen bleiben unbeantwortet:
* Was ist der Unterschied zwischen einer Leistung und einer Tagung?
Ist ein Tagungsprogramm aus mehrere Leistungen individuell zusammenstellbar?
* Soll auch eine Möglichkeit der Mehrtägigkeit berücksichtigt werden?
* Warum wird das Entwurfsmuster Interface nicht erwähnt?
* Ist ein Rücktritt von gebuchten Leistungen möglich?
* Können Tagungsprogramme geändert werden?