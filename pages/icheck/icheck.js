define(['icheck'], function() {

	$('.demo-list input').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue',
		increaseArea: '20%'
	});

	$('.demo-methods dt .self').click(function() {
		var self = $(this),
			self_class = self.attr('class').replace('self ', '');

		switch(self_class) {
			case 'do-check':
				$('#input-1, #input-3').iCheck('check');
				break;
			case 'do-uncheck':
				$('#input-1, #input-3').iCheck('uncheck');
				break;
			case 'do-disable':
				$('#input-2, #input-4').iCheck('disable');
				break;
			case 'do-enable':
				$('#input-2, #input-4').iCheck('enable');
				break;
			case 'do-destroy':
				$('.demo-list input').iCheck('destroy');
				break;
		};
	});

	$('.skin-minimal input').iCheck({
		checkboxClass: 'icheckbox_minimal',
		radioClass: 'iradio_minimal',
		increaseArea: '20%'
	});

	$('.skin-square input').iCheck({
		checkboxClass: 'icheckbox_square-green',
		radioClass: 'iradio_square-green',
		increaseArea: '20%'
	});

	$('.skin-flat input').iCheck({
		checkboxClass: 'icheckbox_flat-red',
		radioClass: 'iradio_flat-red'
	});

	$('.skin-polaris input').iCheck({
		checkboxClass: 'icheckbox_polaris',
		radioClass: 'iradio_polaris',
		increaseArea: '-10%'
	});

	$('.skin-futurico input').iCheck({
		checkboxClass: 'icheckbox_futurico',
		radioClass: 'iradio_futurico',
		increaseArea: '20%'
	});

	$('.skin-line input').each(function() {
		var self = $(this),
			label = self.next(),
			label_text = label.text();

		label.remove();
		self.iCheck({
			checkboxClass: 'icheckbox_line-blue',
			radioClass: 'iradio_line-blue',
			insert: '<div class="icheck_line-icon"></div>' + label_text
		});
	});

	// 颜色主题选择
	$('.colors li').click(function() {
		var self = $(this);

		if(!self.hasClass('active')) {
			self.siblings().removeClass('active');

			var skin = self.closest('.skin'),
				color = self.attr('class') ? '-' + self.attr('class') : '',
				checkbox = skin.data('icheckbox'),
				radio = skin.data('iradio'),
				checkbox_default = 'icheckbox_minimal',
				radio_default = 'iradio_minimal';

			if(skin.hasClass('skin-square')) {
				checkbox_default = 'icheckbox_square', radio_default = 'iradio_square';
				checkbox == undefined && (checkbox = 'icheckbox_square-green', radio = 'iradio_square-green');
			};

			if(skin.hasClass('skin-flat')) {
				checkbox_default = 'icheckbox_flat', radio_default = 'iradio_flat';
				checkbox == undefined && (checkbox = 'icheckbox_flat-red', radio = 'iradio_flat-red');
			};

			if(skin.hasClass('skin-line')) {
				checkbox_default = 'icheckbox_line', radio_default = 'iradio_line';
				checkbox == undefined && (checkbox = 'icheckbox_line-blue', radio = 'iradio_line-blue');
			};

			checkbox == undefined && (checkbox = checkbox_default, radio = radio_default);

			skin.find('input, .skin-states .state').each(function() {
				var element = $(this).hasClass('state') ? $(this) : $(this).parent(),
					element_class = element.attr('class').replace(checkbox, checkbox_default + color).replace(radio, radio_default + color);

				element.attr('class', element_class);
			});

			skin.data('icheckbox', checkbox_default + color);
			skin.data('iradio', radio_default + color);
			self.addClass('active');
		};
	});

});