var http = require('http')
var str = ""

http.get(process.argv[2], function (response) {
	response.setEncoding('utf8')
	response.on('data',function (data) {
		str += data
	})
	response.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	})
	response.on('end', function(e) {
		console.log(str.length)
		console.log(str)
	})
})
/*

 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 HTTP COLLECT
 Exercise 8 of 13

Write a program that performs an HTTP GET request to a URL provided to you as th
e first command-line argument. Collect all data from the server (not just the fi
rst "data" event) and then write two lines to the console (stdout).

The first line you write should just be an integer representing the number of ch
aracters received from the server and the second line should contain the complet
e String of characters sent by the server.

-------------------------------------------------------------------------------

## HINTS

There are two approaches you can take to this problem:

1) Collect data across multiple "data" events and append the results together pr
ior to printing the output. Use the "end" event to determine when the stream is
finished and you can write the output.

2) Use a third-party package to abstract the difficulties involved in collecting
 an entire stream of data. Two different packages provide a useful API for solvi
ng this problem (there are likely more!): bl (Buffer List) and concat-stream; ta
ke your pick!

  [http://npm.im/bl](http://npm.im/bl)
  [http://npm.im/concat-stream](http://npm.im/concat-stream)

To install a Node package, use the Node Package Manager npm. Simply type:

    $ npm install bl

And it will download and install the latest version of the package into a subdir
ectory named node_modules. Any package in this subdirectory under your main prog
ram file can be loaded with the require syntax without being prefixed by './':

    var bl = require('bl')

Node will first look in the core modules and then in the node_modules directory
where the package is located.

If you don't have an Internet connection, simply make a node_modules directory a
nd copy the entire directory for the package you want to use from inside the lea
rnyounode installation directory:

  file://C:\Users\Isaac\AppData\Roaming\npm\node_modules\learnyounode\node_modul
es\bl
  file://C:\Users\Isaac\AppData\Roaming\npm\node_modules\learnyounode\node_modul
es\concat-stream

Both bl and concat-stream can have a stream piped in to them and they will colle
ct the data for you. Once the stream has ended, a callback will be fired with th
e data:

    response.pipe(bl(function (err, data) {  }))
    // or
    response.pipe(concatStream(function (data) {  }))

Note that you will probably need to data.toString() to convert from a Buffer.

Documentation for both of these modules has been installed along with learnyouno
de on your system and you can read them by pointing your browser here:

  file://C:\Users\Isaac\AppData\Roaming\npm\node_modules\learnyounode\docs\bl.ht
ml
  file://C:\Users\Isaac\AppData\Roaming\npm\node_modules\learnyounode\docs\conca
t-stream.html

-------------------------------------------------------------------------------

 » To print these instructions again, run: learnyounode print
 » To execute your program in a test environment, run: learnyounode run program.
js
 » To verify your program, run: learnyounode verify program.js
 » For help run: learnyounode help
────────────────────────────────────────────────────────────────────────────────


1.    ACTUAL:  "425"
1.  EXPECTED:  "425"

2.    ACTUAL:  "As cunning as a bushie heaps as stands out like rack off. Stands
 out like a dero and she'll be right flick. It'll be whinge no worries we're goi
ng boogie board. Stands out like a trackies no dramas lets throw a mullet."
2.  EXPECTED:  "As cunning as a bushie heaps as stands out like rack off. Stands
 out like a dero and she'll be right flick. It'll be whinge no worries we're goi
ng boogie board. Stands out like a trackies no dramas lets throw a mullet."

3.    ACTUAL:  "She'll be right butcher with as busy as a dole bludger. As busy
as a swag also flat out like a figjam. Shazza got us some pash when lets throw a
 spit the dummy. Come a boardies and as busy as a down under. "
3.  EXPECTED:  "She'll be right butcher with as busy as a dole bludger. As busy
as a swag also flat out like a figjam. Shazza got us some pash when lets throw a
 spit the dummy. Come a boardies and as busy as a down under. "

4.    ACTUAL:  ""
4.  EXPECTED:  ""


────────────────────────────────────────────────────────────────────────────────


✓ Submission results match expected

# PASS

Your solution to HTTP COLLECT passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/