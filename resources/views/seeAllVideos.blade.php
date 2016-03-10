<?php
	foreach ($videos as $video) {
		var_dump($video->source);
		var_dump($video->stars);
		var_dump($video->likes);
		var_dump($video->hotel->name);
		var_dump($video->user->name);
	}

?>
