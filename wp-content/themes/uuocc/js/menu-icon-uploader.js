jQuery(document).ready(function ($) {
    $('.upload-icon-button').on('click', function (e) {
        e.preventDefault();
        var button = $(this);
        var targetInput = $(button.data('target'));

        var frame = wp.media({
            title: 'Select or Upload Icon',
            button: { text: 'Use this icon' },
            multiple: false
        });

        frame.on('select', function () {
            var attachment = frame.state().get('selection').first().toJSON();
            targetInput.val(attachment.url);
        });

        frame.open();
    });
});