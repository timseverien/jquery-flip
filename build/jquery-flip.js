/*!
 * jQuery Flip
 * https://github.com/timseverien/jquery-flip
 *
 * Copyright 2015 Tim Severien
 * Released under the MIT license
 * https://raw.githubusercontent.com/timseverien/jquery-flip/master/LICENSE
 */
(function($) {
    // More exclamation marks to tell JIT compiler WE MEAN SERIOUS BUSINESS
    if (!!!$) {
        throw new Error('WHAT PART OF “JQUERY PLUGIN” DID YOU MISS? (╯°□°）╯︵ ┻━┻');
    }

    /**
     * @function
     * @private
     * @param {jQuery} $src
     * @param {jQuery} $dest
     */
    function moveChildrenReversed($src, $dest) {
        $src.children().each(function() {
            $dest.prepend($(this));
        });
    }

    function moveFlippedSection($src, $dest) {
        $src.each(function() {
            var $row = $(this);
            moveChildrenReversed($row, $row);
        });

        moveChildrenReversed($src, $dst);
    }

    /**
     * @function
     * @private
     * @param {jQuery} $element
     */
    function flipTable($element) {
        if ($element.prop('tagName') !== 'TABLE') {
            throw new Error('LET ME SPELL IT FOR YOU: T-A-B-L-E (╯°□°）╯︵ ┻━┻');
        }

        var $head = $element.children('thead'),
            $foot = $element.children('tfoot'),
            $body = $element.children('tbody'),

            $vhead = $('<thead>'),
            $vfoot = $('<tfoot>');

        // Move body first
        if(!$body.length) $body = $element;
        moveFlippedSection($body, $body);

        // Make sure new tfoot is prepended before the body
        if($head.length) {
            moveFlippedSection($head, $vfoot);
            $head.remove();
            $element.prepend($vfoot);
        }

        // Make sure new thead is prepended before tfoot
        if($foot.length) {
            moveFlippedSection($foot, $vhead);
            $foot.remove();
            $element.prepend($vhead);
        }
    }

    $.fn.flip = function() {
        return this.each(function() {
            flipTable($(this));
        });
    };
})(jQuery);
