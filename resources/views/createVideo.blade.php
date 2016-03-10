<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8">
		<title>Poster une viéo</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
	</head>
	<body>

		<?php
			$page_id = "487675364765355";
			$access_token = 'CAAX4thzck3MBALm5yxnZBIbytl1rJZBZAe5XO6C6MAd5YWalXPqGTvjOoKvvwq9EUcQJRd8IcbhDoEwVb4KuynBFuH1EO3zhhYMJTiic8IQ6EcAqW51nf5624dBHYLpaYSRPMhOFWoppI8wfgGHRZANzPIBZCm79xJpnUI5RPoT7V6OqrJks3';
		?>

		<div class="container" style="margin-top:40px; text-align: center;">
			<div class="row">
				<div class="col-sm-4 col-sm-offset-4">
					<form id="formPostVideo">
					  <div class="form-group">
					    <label for="inputTitle">Titre de la video</label>
					    <input type="text" class="form-control" id="inputTitle" name ="title" placeholder="Titre">
					  </div>
					  <div class="form-group">
					    <label for="inputDescription">Description de la video</label>
					    <textarea class="form-control" id="inputDescription" name="description" rows="3"></textarea>
					  </div>
					  <div class="form-group">
					    <label for="inputFile">Votre video</label>
					    <input type="file" id="inputFile" name="file">
					  </div>
					  <div class="form-group">
						<label for="inputHotel">Hotel</label>
						<select class="form-control" id="inputHotel">
							<?php
								foreach ($hotels as $hotel) {
									echo '<option name="hotel_id" value="' . $hotel->id . '">' . $hotel->name . '</option>';
								}
							?>
						</select>
					  </div>
					  <button id="submitBtn" class="btn btn-default">Envoyer</button>
					</form>

					<i class="fa fa-spinner fa-5x fa-pulse" id="loader"></i>

					<div id="successPostVideo" class="alert alert-success" role="alert">Votre Video a bien été postée</div>
				</div>
			</div>
		</div>

		<script>

			$(function() {

				$('#successPostVideo').hide();
				$('#loader').hide();

				$( "#submitBtn" ).on( "click", function(e) {
					e.preventDefault();
					$('#formPostVideo').hide();
					$('#loader').show();
					var data = {
						title: $('#inputTitle').val(),
						description: $('#inputDescription').val()
					};
					var postUrl = "https://graph-video.facebook.com/<?php echo $page_id; ?>/videos?title=" +
								  encodeURI(data.title) + "&description=" + encodeURI(data.description) +
		    					  "&access_token=<?php echo $access_token; ?>";
					var formData = new FormData();
					formData.append("file", $('#inputFile')[0].files[0]);

					$.ajax({
						method: "POST",
						url: postUrl,
						data: formData,
						processData: false,
						contentType: false,
					}).done(function(response) {
						$('#loader').hide();
						$('#successPostVideo').show();

						var dataVideo = {
							source: "https://www.facebook.com/gestestdiw/videos/" + response.id + '/',
							likes: 0,
							stars: 0,
							hotel_id: $('#inputHotel').val()
						};

						$.ajax({
							method: "POST",
							url: "store",
							data: dataVideo,
							dataType: "json"
						}).done(function(response) {
							$('#loader').hide();
							$('#successPostVideo').show();
							console.log('success', response);
						});	
					});	
					
				});

			});

		</script>

	</body>
</html>
