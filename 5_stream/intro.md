# Stream

Streams in Node.js are objects that allow data to be processed in chunks, enabling efficient handling of large amounts of data. There are four main types of streams:

1. **Readable Streams**: These streams allow you to read data from a source, like a file or an HTTP request.
2. **Writable Streams**: These streams allow you to write data to a destination, like a file or an HTTP response.
3. **Duplex Streams**: These streams allow both reading and writing, like a socket connection.
4. **Transform Streams**: These are a type of duplex stream where the output is a transformation of the input, such as compressing or encrypting data.


Les flux (streams) dans Node.js sont des objets qui permettent de traiter les données par morceaux, facilitant ainsi la gestion efficace de grandes quantités de données. Il existe quatre principaux types de flux :

1. **Readable Streams (Flux de lecture)** : Ces flux permettent de lire des données à partir d'une source, comme un fichier ou une requête HTTP.
2. **Writable Streams (Flux d'écriture)** : Ces flux permettent d'écrire des données vers une destination, comme un fichier ou une réponse HTTP.
3. **Duplex Streams (Flux duplex)** : Ces flux permettent à la fois la lecture et l'écriture, comme une connexion par socket.
4. **Transform Streams (Flux de transformation)** : Ce sont des flux duplex où la sortie est une transformation de l'entrée, comme la compression ou le chiffrement des données.

## Benefits of Using Streams:
- **Memory Efficiency**  : Streams allow for processing large files without loading them entirely into memory, which helps manage resources more effectively.
- **Improved Performance**  : Streaming data reduces latency and improves the responsiveness of the server, especially for large files.


- **Efficacité Mémoire** : Les flux permettent de traiter de grands fichiers sans les charger entièrement en mémoire, ce qui aide à gérer les ressources plus efficacement.

- **Performance Améliorée** : La diffusion des données réduit la latence et améliore la réactivité du serveur, en particulier pour les fichiers volumineux.