export interface SceneItem {
   id : string;
   scene_id : string;
   date : Date;
   cloud_cover : number;
   wrs_path : number;
   wrs_row : number;
   s3_location : string;
   sun_azimuth : number;
   sun_elevation : number;
   small_thumbnail : string;
   large_thumbnail : string;
};