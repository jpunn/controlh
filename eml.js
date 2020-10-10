<script  type="text/javascript">
$("#CommentForm").on('submit',function(e){
        //optional validation code here

        e.preventDefault();

        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxwBUBNe-IhJuzbvREAothxwE8YMJilhBfOBsCBJ3jsjVJXHWr9/exec",
            method: "POST",
            dataType: "json",
            data: $('#CommentForm').serialize(),
            success: function(response) {

                if(response.result == "success") {
                    $(Document).reset();
                    alert('Thank you for contacting us.');
                    return true;
                }
                else {
                    alert("Something went wrong. Please try again.")
                }
            },
            error: function() {

                alert("Something went wrong. Please try again.")
            }
        })
    });
</script>
