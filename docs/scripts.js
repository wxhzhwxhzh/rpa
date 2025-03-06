$(document).ready(function() {

    // 从新标签页打开
    $('a.site-link').attr('target', '_blank');
    // 搜索功能实现
    $('.search-box').on('input', function() {
        const query = $(this).val().toLowerCase();
        
        $('.site-item').each(function() {
            const text = $(this).text().toLowerCase();
            const match = text.includes(query);
            $(this).toggle(match);
            
            // 高亮匹配文字
            if (match && query) {
                const regex = new RegExp(`(${query})`, 'gi');
                const highlighted = $(this).html().replace(regex, '<mark>$1</mark>');
                $(this).html(highlighted);
            }
        });
    });

    // 卡片悬停动画
    $('.category-card').hover(
        function() {
            $(this).css('box-shadow', '0 10px 20px rgba(0,0,0,0.15)');
        },
        function() {
            $(this).css('box-shadow', '0 5px 15px rgba(0,0,0,0.1)');
        }
    );

    // 响应式布局调整
    function adjustLayout() {
        if ($(window).width() < 600) {
            $('.category-grid').css('grid-template-columns', '1fr');
        } else {
            $('.category-grid').css('grid-template-columns', 'repeat(auto-fill, minmax(300px, 1fr))');
        }
    }
    $(window).on('resize', adjustLayout);
    adjustLayout();


});