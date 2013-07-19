var gridFactory = require( "../index" ),
    should = require( "should" );

describe( "Given a grid factory", function( ) {
    it( "should be defined", function( ) {
        gridFactory.should.exists;
    } );
    it( "should have a build method", function( ) {
        gridFactory.create.should.exists;
    } );
    it( "should throw with invalid type", function( ) {
        ( function( ) {
            gridFactory.create( "toto" );
        } ).should.
        throw ( );
    } );
    it( "should be able to render default grid", function( ) {
        var defaultGrid = gridFactory.create( );
        defaultGrid.should.exists;
        defaultGrid.render.should.exists;
    } );
    it( "should be able to create bootstrap grid", function( ) {
        var bootstrapGrid = gridFactory.create( "bootstrap" );
        bootstrapGrid.should.exists;
        bootstrapGrid.render.should.exists;
    } );
    it( "should be able to create bootstrap grid", function( ) {
        var bootstrapFluidGrid = gridFactory.create( "bootstrapFluid" );
        bootstrapFluidGrid.should.exists;
        bootstrapFluidGrid.render.should.exists;
    } );
    it( "should be able to create bootstrap grid", function( ) {
        var foundation = gridFactory.create( "foundation" );
        foundation.should.exists;
        foundation.render.should.exists;
    } );
} );