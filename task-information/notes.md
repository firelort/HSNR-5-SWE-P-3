Wie werden aktuelle Hinweise gespeichert? Nicht im Klassendiagramm o.ä.
Unseriöse Texte - Aufgabe als Witz genommen?

* Vollständigkeit: werden alle geforderten Eigenschaften und Aussagen im Entwurf behandelt?
    * werden alle fachlichen Anforderungen berücksichtigt?
    * werden alle nichtfachlichen Anforderungen berücksichtigt?
        * **ja, ist webbasiert und nosqldb**
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
    * ist die Definition und Beschreibung des Datenmodells für die Implementierung ausreichend?
        * **teilweise, es muss davon ausgegangen werden, dass der object name in form von nummern die id der klasse darstellen soll, dessen name nur aus referenzen oder klassendiadram erschließbar ist, auch bei werten wie zahlungsform ist nicht klar was dort drin stehen kann ausser eine id mit string als value**