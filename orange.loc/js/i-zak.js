$(document).ready(function(){
    $(document).on('click','.i-zak',function () {
        var s = $(this);
        if(s.parent().get(0).tagName != 'LABEL' && s.parent().parent().get(0).tagName != 'LABEL' && s.parent().parent().parent().get(0).tagName != 'LABEL'){
            s.prev().trigger('click');
        }
    });
    $(document).on('change','input[type=checkbox],input[type=radio]',function(){
        var i = $(this);
        var s = i.next();
        // console.log(i.attr('type')== 'checkbox');
        if(i.attr('type')== 'checkbox'){
            if(!i.is(':checked')){
                s.removeClass('checked');
                i.removeAttr('checked');
            }else{
                s.addClass('checked');
                i.attr('checked',1);
            }
        }else if(i.attr('type')== 'radio'){
            $.each($('input[name='+i.attr('name')+']'), function(){
                $(this).next().removeClass('checked');
            });
            i.next().addClass('checked');
        }
    });
    $(document).on('change','input[name=type_flat]',function(){
        var inp = $(this).val();
        var img = $('#photo_demonstration_1');
        if(inp=='Новостройка'){
            img.attr('src','images/photo_1_for_question_one.png');
        }else{
            img.attr('src','images/photo_2_for_question_one.png');
        }
    });
});