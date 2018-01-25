# Apache Cordova local Storage

Ziel: Speichern von Daten auf dem ausführenden Gerät.

Cordova bietet verschiedene Schnittstellen und Plugins um Daten zu speichern.

## Funktionsweise

Um den localen Speicher zu verwenden bietet die local storage Komponente ein synchrones key/value Paar.

## Benutzung

Der locale Spceicher wird durch windows.localStorage aufgerufen.

Zu den wichtigsten Methoden gehören:
var storage = window.localStorage;
var value = storage.getItem(key); // Wert eines mitgelieferten Schlüssels wird abgerufen
storage.setItem(key, value)       // festlegen eines Schlüssel/Werte-Paares
storage.removeItem(key)           // Schlüssel/Werte-Paar durch Übermittlung des Schlüssels löschen
