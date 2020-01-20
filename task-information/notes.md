Wie werden aktuelle Hinweise gespeichert? Nicht im Klassendiagramm o.ä.
Unseriöse Texte - Aufgabe als Witz genommen?

* Vollständigkeit: werden alle geforderten Eigenschaften und Aussagen im Entwurf behandelt?
    * werden alle fachlichen Anforderungen berücksichtigt?
    * werden alle nichtfachlichen Anforderungen berücksichtigt?
        * **ja, ist webbasiert und nosqldb**
        * Nein, da die Verwendung nur im Intranet nicht brücksichtigit worden ist (ggf. nebensächlich, da es auch auf einen Server geladen werden kann, welcher von aussen nicht erreichbar ist.)
* Konsistenz: passen Aufteilung in Komponenten, Entwurf Benutzungsschnittstelle und Datenmodell (Klassendiagramm)
zusammen?
    * **teilweise, es tauhen zb. funktionen im sequenzdiagramm auf, die nirgendswo anders auftauchen z.b. login oder add_tagungen**
* Umsetzbarkeit: sind die Angaben geeignet als Vorgabe für die Implementierung?
    * ist die Systemarchitektur verständlich angegeben?
        * **teilweise, es wird beispielsweise als export schnittstelle aktuelle hinweise geliefert, aber woher diese stammen is fraglich, es gibt keine quelle der daten nur dass diese aus anderen daten erstellt werden können, aber wie?**
    * ist die Systemarchitektur geeignet?
    
    * ist die Systemarchitektur ausreichend detailliert angegeben?
        * **nein, alles sehr overflächlich oder zu knapp beschrieben, komponentendiagram nicht genug details, entwurfsmuster sagt so gut wie nichts aus (publish subscribe für rest?? was soll womit gemacht werden, wohin publishen)**
    * berücksichtigt die Systemarchitektur Aspekte der technischen Umsetzung ausreichend?
    * sind die Entwürfe zur Benutzungsschnittstelle als Implementierungsvorgabe geeignet?
        * **ist möglich zu implementieren aber sieht "schlampig" aus, nicht erkennbar ob absicht oder schlecht gemacht**
        * Wer welche Seiten sehen darf geht aus der Dokumenation nicht hervor
    * ist die Definition und Beschreibung des Datenmodells für die Implementierung ausreichend?
        * **teilweise, es muss davon ausgegangen werden, dass der object name in form von nummern die id der klasse darstellen soll, dessen name nur aus referenzen oder klassendiadram erschließbar ist, auch bei werten wie zahlungsform ist nicht klar was dort drin stehen kann ausser eine id mit string als value**
        
        
Roberts Kommentar:
* Generell
    * Gibt es nur ein Tag oder fehlt einfach überall der Tag?
    * Könnte es mehrere Veranstallungen parallel existieren?
    * Unterschied Leistung und Tagung? -> Tagungsprogramm aus mehrer Leistungen individuell zusammenstellbar?
* Allgemeine Beschreibung nicht verständlich
    * Was ist das Ziel? Wo für dient diese Dokumentation
    * Zwischen welchen Teilen agiert die Schnittstelle
* Komponentendiagramm
    * Import/Export Schnittstellen wirken wirr
        * teilweise fehlt eine Erklärung was die Import/Exportschnittstelle macht
        * Exportschnittstelle importiert von einer anderen Exportschnittstelle. Warum? - Einfachd den Strich weiter ziehen
        * Es können nur Daten aus der DB abgerufen werden (Daten einlesen **auch komisches wording**), aber nicht gespeichert werden
    * Wo wird das Nutzerinterface gebaut? Client oder Serverseitig?
    * An welches Technisches System exportiert die Webapplikation Ihre Exporte?
* Komponenten
    * Die verschieden Komponenten werden nicht ausführlich genug erläutert.
    * es fehlen erklärende Beschreibungen zu den Export und Import Schnittstellen, welche Daten sind benötigt?
    * Usermgmt. ist ein Modul aber doch zwei? (User Sesssion)
    * Ist ein Rücktritt von gebuchten Leistungen möglich?
    * Können Tagungsprogramme geändert werden?
    * Verwaltung -> Modul oder Person? -> Wie wird dort verwaltet?
    
* Wireframes: Rollen des Nutzers wird nicht ersichtlich
    * Bei gleichem Grundlayout hätte das Wireframe modular aufgebaut sein können
    * Platzhaltertexte wirken nicht professionel.
    * Aktiver Tab wird nicht angezeigt?
    * Ohne Login Erstellung Tagungsprogramm möglich?
    * Registrierung = Login?
    * Unterschied Leistung und Tagung? -> Tagungsprogramm aus mehrer Leistungen individuell zusammenstellbar?
    * Eingeloggte Rollen der Wireframes sind nicht klar
    * Wireframe_Home -> auch gleichzeitig Aktuelle Hinweise
        * Kann nur ein Hinweis existieren oder auch meherer?
    * Wireframe_Tagungsübersicht
        * Art der Tagungseinheit & Redner / Autoren fehlt -> sollte es eine Detailansicht geben? (Wireframe würde fehlen)
    * Wireframe_Leistungsübersicht
        * Leistungsübersicht nur Teil von Tagungsübersicht? Oder nur Zufall
    * Wireframe_Leistungen_buchen
        * Warum gibt es hier wieder mehr?
        * Gibt es eine Bestätigungsabfrage, bevor die Buchung ausgeführt wird?
    * Wireframe_Spezielle_hinweise
        * Wem wird das angezeigt?
        * Unterschied zw. Aktuelle und spezielle Hinweise?
    * Wireframe_tagungsmanager
        * Gibt es jetzt mehrer Tage? Warum wird das in den anderen Ansichten nicht mit angezeigt?
        * Buttons sollen nicht mittig sein?
        * Unterschied zwischen Tagung und Leistung? -> Tagung ist ein Programmpunkt an einem Tag?
    * Wireframe_Tagungsmangererstellen
        * Sind alle Felder pflicht?
        * Wo werden die Räume für das Dropdown verwaltet?
    * Wireframe_Tagungsprogramm    
        * Wirwar im Wireframe ohne Login kann ein Tagungsprogramm erstellt werden
        * Das UI eine Erstellung nicht erlaubt
    * Wireframe_Berechtigungen_verwalten
        * Was bedeutet hochstufen?
        * Gibt es auch ein runterstufen?
        * Wer darf das?
    * Wireframe_Buchungen_verwalten
        * ggf. fehlt das Datum
        * Tabelle extra nicht volle breite?
    * Wireframe_registrierungen_verwalten
        * Tabelle extra nicht volle breite?
    * Wireframe_Zahlungen_verwalten
        * Wo kommt die Funktion Mahnen her? Was macht diese?
        
* Sequenzdiagram
    * Beschreibung wünschenswert -> bessers Verständnis
    * Loginschritt nicht verständlich
        * Warum erhält der Client nicht die Session -> Wie kann ein stateless Server eine Session tracken
        * Welche Seite wird nach einem Login angezeigt?
    * Rolle MapMetadata nicht erkentlich
        * Warum geht alles an den Webserver zurück, vor allem was geht zurück?
    * Vermtl. wird die Session am Ende beendet?  

* Klassendiagramm
    * Database-Manager
        * ist einfach leer
    * Konto
        * Wo wird abgebucht? Fehlt ggf. in Komponentendiagramm Importschnitstelle zur Bank, bzw. wie wird abgebucht?

* Entwurfsmuster
    * Schnittstelle zwischen App und Server ist Publish-Subscribe um damit REST zu implementieren???
        * Wird HTTP genutzt oder ein Socket? - Wie kann der Webserver ohne Request eine Nachricht dem Client senden. - Stateless
    * Object/Relational Map - Entwurfsmuster
        * Ist das überhaupt ein Entwurfsmuster
        