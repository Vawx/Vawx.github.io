describe( 'pingPong', function( )
{
  it( "Is 'pingpong' if divisible by 15.", function( ) {
    expect( pingPong( 15 ) ).to.equal( 'pingpong' );
  });

  it( "Is 'ping' if divisible by 3.", function( ) {
    expect( pingPong( 3 ) ).to.equal( 'ping' );
  });

  it( "Is 'pong' if divisble by 5.", function( ) {
    expect( pingPong( 5 ) ).to.equal( 'pong' );
  });

  it( "Is same value if not divisble by 3, 5, or 15.", function( ) {
    expect( pingPong( 14 ) ).to.equal( 14 );
  });
});
