var gridBuilder = require( "../lib/grid" ),
    should = require( "should" );

describe( "Given a gridBuilder", function( ) {
    it( "should be defined", function( done ) {
        gridBuilder.should.exists;
        done( );
    } );
    it( "should throw if wrong extencisated", function( ) {
        ( function( ) {
            new gridBuilder( {
                prefix: 092,
                row: 2092
            } );
        } ).should.
        throw ( );
    } );
    it( "should throw if prefix class is wrong", function( ) {
        ( function( ) {
            new gridBuilder( {
                prefix: 092
            } );
        } ).should.
        throw ( );
    } );
    it( "should throw if extraClass is wrong", function( ) {
        ( function( ) {
            new gridBuilder( {
                prefix: "de",
                row: "",
                extra: 233
            } );
        } ).should.
        throw ( );
    } );
    describe( "and an instanciation", function( ) {
        var basicStructure = {
            name: "root",
            columns: [ {
                    name: "header",
                    parent: "root",
                    size: 12
                }, {
                    name: "content",
                    parent: "root"
                }
            ]
        };

        var mobileBasicStructure = {
            name: "root",
            columns: [ {
                    name: "header",
                    parent: "root",
                    size: 12,
                    mobileSize: 6
                }, {
                    name: "content",
                    parent: "root"
                }
            ]
        };

        var offsetBasicStructure = {
            name: "root",
            columns: [ {
                    name: "header",
                    parent: "root",
                    size: 10,
                    offset: 2
                }, {
                    name: "content",
                    parent: "root"
                }
            ]
        };

        var offsetAndMobileBasicStructure = {
            name: "root",
            columns: [ {
                    name: "header",
                    parent: "root",
                    size: 10,
                    mobileSize: 12,
                    offset: 2
                }, {
                    name: "content",
                    parent: "root"
                }
            ]
        };

        var mobileOffsetAndOffsetAndMobileBasicStructure = {
            name: "root",
            columns: [ {
                    name: "header",
                    parent: "root",
                    size: 10,
                    mobileSize: 11,
                    offset: 2,
                    offsetMobileSize: 1
                }, {
                    name: "content",
                    parent: "root"
                }
            ]
        };

        var centeredMobileOffsetAndOffsetAndMobileBasicStructure = {
            name: "root",
            columns: [ {
                    name: "header",
                    parent: "root",
                    size: 10,
                    mobileSize: 11,
                    offset: 2,
                    offsetMobileSize: 1,
                    centered: true,
                }, {
                    name: "content",
                    parent: "root"
                }
            ]
        };

        var mobileCenteredCenteredMobileOffsetAndOffsetAndMobileBasicStructure = {
            name: "root",
            columns: [ {
                    name: "header",
                    parent: "root",
                    size: 10,
                    mobileSize: 11,
                    offset: 2,
                    offsetMobileSize: 1,
                    centered: true,
                    mobileCentered: true
                }, {
                    name: "content",
                    parent: "root"
                }
            ]
        };

        var fullOptions = {
            name: "root",
            columns: [ {
                    name: "header",
                    parent: "root",
                    size: 10,
                    mobileSize: 11,
                    offset: 2,
                    offsetMobileSize: 1,
                    centered: true,
                    mobileCentered: true,
                    extra: "pull-2"
                }, {
                    name: "content",
                    parent: "root"
                }
            ]
        };

        describe( "with no parameter passed", function( ) {
            var grid = new gridBuilder( );
            it( "should have a render method", function( ) {
                grid.render.should.exists;
            } );
            it( "render method should return a real basic structure with no paremter", function( ) {
                var html = grid.render( );
                html.should.equal( "<div class='cosy-root 12'>{{{content}}}</div>" );
            } );
        } );
        describe( "with Bootstrap setup", function( ) {
            var grid = new gridBuilder( {
                prefix: "span",
                row: "row",
                extra: "",
                offsetPrefix: "offset"
            } );

            it( "render method should return header main footer with appropriate parameter", function( ) {
                var html = grid.render( basicStructure );
                html.should.equal( "<div id='root' >{{{root}}}<div id='header' class='span12 header'>{{{header}}}</div><div id='content' >{{{content}}}</div></div>" );
            } );
            it( "render method should return header main footer with appropriate parameter", function( ) {
                var html = grid.render( offsetBasicStructure );
                html.should.equal( "<div id='root' >{{{root}}}<div id='header' class='span10 offset2 header'>{{{header}}}</div><div id='content' >{{{content}}}</div></div>" );
            } );
        } );
        describe( "with Foundation setup", function( ) {

            var foundationGrid = new gridBuilder( {
                prefix: "large-",
                row: "row",
                extra: "columns",
                mobilePrefix: "small-",
                offsetPrefix: "large-offset-",
                offsetMobilePrefix: "small-offset-",
                centered: "large-centered",
                mobileCentered: "small-centered",
            } );

            it( "render layout with appropriate class", function( ) {
                var html = foundationGrid.render( basicStructure );
                html.should.equal( "<div id='root' >{{{root}}}<div id='header' class='large-12 columns header'>{{{header}}}</div><div id='content' >{{{content}}}</div></div>" );
            } );
            it( "render layout with appropriate syntax for mobile", function( ) {
                var html = foundationGrid.render( mobileBasicStructure );
                html.should.equal( "<div id='root' >{{{root}}}<div id='header' class='large-12 small-6 columns header'>{{{header}}}</div><div id='content' >{{{content}}}</div></div>" );
            } );
            it( "render layout with appropriate syntax with offset", function( ) {
                var html = foundationGrid.render( offsetBasicStructure );
                html.should.equal( "<div id='root' >{{{root}}}<div id='header' class='large-10 large-offset-2 columns header'>{{{header}}}</div><div id='content' >{{{content}}}</div></div>" );
            } );
            it( "render layout with appropriate syntax with offset for large and mobile", function( ) {
                var html = foundationGrid.render( offsetAndMobileBasicStructure );
                html.should.equal( "<div id='root' >{{{root}}}<div id='header' class='large-10 small-12 large-offset-2 columns header'>{{{header}}}</div><div id='content' >{{{content}}}</div></div>" );
            } );
            it( "render layout with appropriate syntax with offset for large and offset for mobile", function( ) {
                var html = foundationGrid.render( mobileOffsetAndOffsetAndMobileBasicStructure );
                html.should.equal( "<div id='root' >{{{root}}}<div id='header' class='large-10 small-11 large-offset-2 small-offset-1 columns header'>{{{header}}}</div><div id='content' >{{{content}}}</div></div>" );
            } );
            it( "render layout with appropriate syntax with offset for large and offset for mobile and large centered", function( ) {
                var html = foundationGrid.render( centeredMobileOffsetAndOffsetAndMobileBasicStructure );
                html.should.equal( "<div id='root' >{{{root}}}<div id='header' class='large-10 small-11 large-offset-2 small-offset-1 large-centered columns header'>{{{header}}}</div><div id='content' >{{{content}}}</div></div>" );
            } );
            it( "render layout with appropriate syntax with mobileOffset offset for large and offset for mobile and large centered", function( ) {
                var html = foundationGrid.render( mobileCenteredCenteredMobileOffsetAndOffsetAndMobileBasicStructure );
                html.should.equal( "<div id='root' >{{{root}}}<div id='header' class='large-10 small-11 large-offset-2 small-offset-1 large-centered small-centered columns header'>{{{header}}}</div><div id='content' >{{{content}}}</div></div>" );
            } );
            it( "render layout with full options", function( ) {
                var html = foundationGrid.render( fullOptions );
                html.should.equal( "<div id='root' >{{{root}}}<div id='header' class='large-10 small-11 large-offset-2 small-offset-1 large-centered small-centered pull-2 columns header'>{{{header}}}</div><div id='content' >{{{content}}}</div></div>" );
            } );
        } );
    } );
} );