<template>
    <div class="page">
        <ul id="g1">
            <li><img src="../../assets/images/bg-background.png" /></li>
            <li><img src="../../assets/images/bg-background1.png" /></li>
            <li><img src="../../assets/images/bg-background.png" /></li>
            <li><img src="../../assets/images/bg-background1.png" /></li>
        </ul>
    </div>
</template>
<script>
(function($){
	$(function(){
		$("#g1").jFlip(300,400,{background:"green",cornersTop:false}).bind("flip.jflip",function(event,index,total){
			$("#l1").html("Image "+(index+1)+" of "+total);
		});
	});
})(jQuery);
export default {
  
}
</script>

<style scoped>

</style>

