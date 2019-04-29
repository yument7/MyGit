define(function() {
	var cacheLayer = [];
	$(".fa-hover>a").on('click', function() {
		var iconName = $(this).find("i").attr("class");

		var content = '<div class="highlight"><pre><code class="html"><span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"' + iconName + '"</span> <span class="na">aria-hidden=</span><span class="s">"true"</span><span class="nt">&gt;&lt;/i&gt;</span></code>' +
			' <a class="btn-clipboard2" data-clipboard-text="<i class=&quot;' + iconName + '&quot; aria-hidden=&quot;true&quot;></i>" role="button"><i class="fa fa-clipboard"></i>复制源码</a></pre></div>';

		var index = layer.tips(content, $(this), {
			tips: [1, '#f1f1f1'],
			time: 0,
			area: ['auto'],
			closeBtn: 1
		});

		cacheLayer[0] = index;
		
		//复制
		var copyBtn = document.querySelector('.btn-clipboard2');
		copyBtn.onclick = function(){
			var text = $(this).data("clipboard-text");
			copyTextToClipboard(text);
		}
	});

	$(document).on('mousewheel DOMMouseScroll', onMouseScroll);

	function onMouseScroll(e) {
		layer.close(cacheLayer[0]);
	}

	function copyTextToClipboard(text) {
		var textArea = document.createElement("textarea");
		textArea.style.position = 'fixed';
		textArea.style.top = 0;
		textArea.style.left = 0;
		textArea.style.width = '2em';
		textArea.style.height = '2em';
		textArea.style.padding = 0;
		textArea.style.border = 'none';
		textArea.style.outline = 'none';
		textArea.style.boxShadow = 'none';
		textArea.style.background = 'transparent';
		textArea.value = text;
		
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand('copy');
		document.body.removeChild(textArea);
	}
});