angular.module('opal.ic.controllers').controller(
    'ReportCtrl', function($scope, $http, Episode, schema, options){
        $scope.condition_list = options.condition;
        $scope.editing = {
            infection: null,
            suspected: false,
            hospital_number: null,
            date_reported: moment().format('YYYY-MM-DD')
        }

        $scope.report = function(){
	    $http.get('/patient/?hospital_number=' + $scope.editing.hospital_number)
                .success(function(response) {
                    console.log(response)
                    if(response == []){
                        // Create new patient
                    }else{
                        // Check for active
                        if(response[0].active_episode_id){
                            // We have an active episode
                            // At this stage it's just "Add the infectioncontrol tag."
                            var episode_data = response[0].episodes[response[0].active_episode_id];
                            episode = new Episode(episode_data, schema);
                            episode.tagging.infectioncontrol = true;
                            episode.tagging.save().then(
                                alert('savedit- ta!')
                            );
                        }else{
                            // Create new episode
                        }
                    }

		});
        }

    }
)
