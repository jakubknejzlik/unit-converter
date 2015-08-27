# unit-parser

Use convenient format for writing amounts and easily convert them to useful numbers.

`npm install unit-parser`

# Example

	var unitParser = require('unit-parser');

	unitParser('10s').to('ms');
	// -> 10000

	unitParser('1h').to('ms');
	// -> 3600000

	unitParser('2KB').to('B');
	// -> 2048

	unitParser('1MB').to('B');
	// -> 1048576


# Supported unit systems

Currently byte and time systems are supported.

For more details about currently supported unit systems please see lib/systems/*.js.

