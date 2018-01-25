# Apache Cordova local Storage

Ziel: Speichern von Daten auf dem ausführenden Gerät.

Cordova bietet verschiedene Schnittstellen und Plugins um Daten zu speichern.
Daten können local als synchrones Schlüssel/Werte-Paar oder in Form von strukturierten Datenbanken gepseichert werden.

localStorage ermöglicht den Zugriff auf die W3C Web-Speicherschnittstelle und unterstützt sowohl eine permanente, als auch eine Session- basierte Speicherung. Dies ermöglicht es unter HTML5, Daten innerhalb eines Browsers zu speichern.

## Funktionsweise

Um den Speicher zu verwenden bietet die localStorage Komponente ein synchrones key/value Paar.

## Benutzung

Der locale Spceicher wird durch __windows.localStorage__ aufgerufen.  
Der Session bezogene Speicher wird durch __window.sessionStorage__ verwendet.

Zu den wichtigsten Methoden gehören:

var storage = window.localStorage;     
var value = storage.getItem(key); // Wert eines mitgelieferten Schlüssels wird abgerufen     
storage.setItem(key, value)       // festlegen eines Schlüssel/Werte-Paares      
storage.removeItem(key)           // Schlüssel/Werte-Paar durch Übermittlung des Schlüssels löschen    

### Vorteile

* wird von allen Cordova Plattformen unterstützt
* Benutzung durch synchrone API sehr einfach

### Nachteile
* es werden nur Strings abgespeichert, komplexe Strukturen müssen seralisiert werden
* schlechte Performance
* nur begrenzter Speicherplatz
* localStorage: könnte durch Betriebssystem gelöscht werden

### weitere Plugins
* Web Storage
* Web SQL Database
* IndexedDB
* Cordova File Plugin
* Cordova SQLite Plugin
