# mucket.io
A [MUCK](https://en.wikipedia.org/wiki/TinyMUCK) framework using [Socket.io](https://socket.io/), with a client served over HTTPS.

##About
#Why?
The various MUCK frameworks in common use were written in the late '80s / early '90s. They communicate via Telnet, which transmits all information in plaintext; and require a user access them via a terminal or specialised MUCK client.
Perhaps at the time, most people with an internet connection were comfortable transmitting information in plaintext, using a terminal, or installing specialised programs. But today, the landscape of the internet and its users is different: encryption is taken for granted; most users are not comfortable in a terminal; and users are wary of installing archaic-looking, single-purpose programs. This hobby project aims to build a modernised MUCK framework: one that encrypts communications and is accessible via an web browser. 
