# convert

[![Build Status](https://travis-ci.org/jakubknejzlik/convert.svg?branch=master)](https://travis-ci.org/jakubknejzlik/convert)

Use convenient format for writing amounts and easily convert them to useful numbers.

`npm install convert`

# Example

	var convert = require('convert');

	convert('10s').to('ms');
	// -> 10000

	convert('1h').to('ms');
	// -> 3600000

	convert('2KB').to('B');
	// -> 2048

	convert('1MB').to('B');
	// -> 1048576


# Supported unit systems

Currently byte and time systems are supported.

For more details about currently supported unit systems please see lib/systems/*.js.

