$(document).ready(function(){
$(".contactform").validate();
$(document).on("submit",".contactform",function(e){
e.preventDefault();
if($(".contactform").valid()){
$.ajax({
url:'sendcontact.php',
type: "POST",            
data: new FormData(this),
contentType: false,      
cache: false,           
processData:false,    
success: function(msg){
$(".showcontactresponse").html(msg);	
}
});
}	
});
});
