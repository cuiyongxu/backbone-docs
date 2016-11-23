// Use the right jQuery source in iframe tests
document.write( "<script id='jquery-lib' src='" +
	parent.document.getElementById("jquery-lib").src.replace( /^(?![^\/?#]+:)/,
		parent.location.pathname.replace( /[^\/]$/, "$0/" ) ) +
"'><\x2Fscript>" );
