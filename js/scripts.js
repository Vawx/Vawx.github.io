var pingPong = function( value ) {
  if ( value % 15 === 0 ) { return 'pingpong'; }
  if ( value % 3 === 0 )  { return 'ping'; }
  if ( value % 5 === 0 )  { return 'pong'; }
  return value;
};

$( document ).ready( function( ) {
  $( "form#ping-pong" ).submit( function( event ) {
    var warning = $( "#warning" ).hide( );
    var valueList = $( "#value-list" ).empty( );
    var value = parseInt( $( "input#value" ).val( ) );

    if ( isNaN( value ) ) {
      warning.show( );
    } else {
      for ( var i = 1; i < value + 1; i++ ) {
        var result = pingPong( i );
        valueList.append( '<li>' + result + '</li>' );
      }
    }
    event.preventDefault( );
  });
});
