$(document).ready(function(){
  console.log("loaded");
  var weapons= [{"name":"44_pistol","damage":48, 'firerate':6,'range':119,'accuracy':66,'weight':4.5,'value':99},
                {"name":"10mm_pistol","damage":18, 'firerate':46,'range':119,'accuracy':61,'weight':4.2,'value':53},
                {"name":"assault_rifle","damage":30, 'firerate':40,'range':119,'accuracy':72,'weight':13.1,'value':144}];
 $('.item-list a').on('mouseenter',function(e){// we can also use click 
    var current_target= $(e.currentTarget).attr('class');
    console.log(current_target);
    for(item in weapons){
      if(weapons[item].name==current_target){
        console.log(weapons[item]);
        var container= $('.item-stats');
        container.find('.damage').html(weapons[item].damage);
        container.find('.ammo').html(weapons[item].ammo);
        container.find('.firerate').html(weapons[item].firerate);
        container.find('.range').html(weapons[item].range);
        container.find('.accuracy').html(weapons[item].accuracy);
        container.find('.weight').html(weapons[item].weight);
        container.find('.value').html(weapons[item].value);
      }
    }
  });
});
