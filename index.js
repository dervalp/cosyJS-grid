var gridBuilder = require( "./lib/grid" );

var isObject = function( obj ) {
    return obj === Object( obj );
};

var strategy = {
    bootstrap: {
        prefix: "span",
        row: "row",
        extra: "",
        offsetPrefix: "offset"
    },
    bootstrapFluid: {
        prefix: "span",
        row: "row-fluid",
        extra: "",
        offsetPrefix: "offset"
    },
    foundation: {
        prefix: "large-",
        row: "row",
        extra: "columns",
        mobilePrefix: "small-",
        offsetPrefix: "large-offset-",
        offsetMobilePrefix: "small-offset-",
        centered: "large-centered",
        mobileCentered: "small-centered",
    }
};

module.exports = {
    create: function( type ) {
        var conf;

        if ( !type ) {
            return new gridBuilder( );
        }

        if ( type === isObject ) {
            return new gridBuilder( type );
        }

        conf = strategy[ type ];

        if ( conf ) {
            return new gridBuilder( conf );
        }

        throw "invalid type for creating grid";
    }
};