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

            Episode.findByHospitalNumber(
                $scope.editing.hospital_number,
                {
                    newPatient: $scope.new_patient,
                    newForPatient: $scope.new_for_patient,
                    error: function(){ alert('Error Reporting:()')}
                }
            )
        };

        $scope.new_patient = function(result){

        };

        $scope.new_for_patient = function(result){
            // Check for active
            if(result.active_episode_id){
                // We have an active episode
                // At this stage it's just "Add the infectioncontrol tag."
                var episode_data = result.episodes[result.active_episode_id];
                episode = new Episode(episode_data, schema);
                newtags = episode.tagging[0].makeCopy()
                newtags.infectioncontrol = true;
                episode.tagging[0].save(newtags).then(
                    alert('savedit- ta!')
                );
            }else{
                // Create new episode
            }

        }
    }
)
