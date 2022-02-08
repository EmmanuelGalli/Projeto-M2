$(document).ready(function(){
    $("#form-submit").attr('disabled', true);
        $("#form-email").keyup(function(){
            let emailOk = (/^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi);
            let email = $("#form-email").val();
            emailOk.test(email) ?(
                $("#msg-email").text(`e-mail válido`),
                $("#img-email").attr('src', 'assets/icons/verificado.png')             
              ) : (
                $("#msg-email").text(`e-mail inválido`),
                $("#img-email").attr('src', 'assets/icons/cancelar.png'),
                $("#form-email").addClass('erro')              
              );
        })
        $("#form-senha").keyup(function(){
            let senha = $("#form-senha").val();
            let senhaForte = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
            senhaForte.test(senha) ?(
                $("#msg-senha").text(`senha forte`),
                $("#img-senha").attr('src', 'assets/icons/verificado.png')
            ) :(
                $("#msg-senha").text(`Insira uma senha forte (ex: seNha@1234)`),
                $("#img-senha").attr('src', 'assets/icons/cancelar.png')
            )            
        });
        $("#form-senha2").keyup(function(){
            let senha = $("#form-senha").val();
            let senha2 = $("#form-senha2").val();
           senha == senha2 ?(
                $("#msg-senha2").text(`senhas coincidem`),
                $("#form-submit").attr('disabled', false),
                $("#img-senha2").attr('src', 'assets/icons/verificado.png')
           ): (
            $("#msg-senha2").text(`Por favor, digite a mesma senha`),
            $("#form-submit").attr('disabled', true),
            $("#img-senha2").attr('src', 'assets/icons/cancelar.png')
           )
        });

        $("#mostraSenha").on('click', function(){
           let type = $("#senha").attr('type') === 'password' ?'text':'password';
            $("#form-senha").attr('type', type);
            console.log(type === 'password');
        });
});