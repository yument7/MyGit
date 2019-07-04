define(function() {
	var cacheLayer = [];
	$(".fa-hover>a").on('click', function() {
		triggerClick(1, $(this));
	});

	$(".icon-hover>a").on('click', function() {
		triggerClick(2, $(this));
	});

	$(document).on('mousewheel DOMMouseScroll', onMouseScroll);

	function triggerClick(sign, that) {
		var iconName,
			content;
		if(sign == 1) {
			iconName = that.find("i").attr("class");
			content = '<div class="highlight"><pre><code class="html"><span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"' + iconName + '"</span> <span class="na">aria-hidden=</span><span class="s">"true"</span><span class="nt">&gt;&lt;/i&gt;</span></code>' +
				' <a class="btn-clipboard2" data-clipboard-text="<i class=&quot;' + iconName + '&quot; aria-hidden=&quot;true&quot;></i>" role="button"><i class="fa fa-clipboard"></i>复制源码</a></pre></div>';
		}

		if(sign == 2) {
			iconName = that.find("use").attr("xlink:href");

			content = '<div class="highlight"><pre><code class="html"><span class="nt">&lt;svg</span> <span class="na">class=</span><span class="s">"icon svg-icon"</span> <span class="na">aria-hidden=</span><span class="s">"true"</span><span class="nt">&gt;</span><span class="nt">&lt;use</span> <span class="na">xlink:href=</span><span class="s">"' + iconName + '"<span class="nt">&gt;</span><span class="nt">&lt;/use&gt;</span><span class="nt">&lt;/svg&gt;</span></code>' +
				' <a class="btn-clipboard2" data-clipboard-text="<svg class=&quot;icon svg-icon &quot; aria-hidden=&quot;true&quot;><use xlink:href=&quot;' + iconName + '&quot;></use></svg>" role="button"><i class="fa fa-clipboard"></i>复制源码</a></pre></div>';
		}

		var index = layer.tips(content, that, {
			tips: [1, '#f1f1f1'],
			time: 0,
			area: ['auto'],
			closeBtn: 1
		});

		cacheLayer[0] = index;

		//复制
		var copyBtn = document.querySelector('.btn-clipboard2');
		copyBtn.onclick = function() {
			var text = $(this).data("clipboard-text");
			copyTextToClipboard(text);
		}
	}

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