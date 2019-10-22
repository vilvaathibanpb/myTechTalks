export type Maybe<T> = T | null;

export interface CapsulesFind {
  id?: Maybe<string>;

  landings?: Maybe<number>;

  mission?: Maybe<string>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  status?: Maybe<string>;

  type?: Maybe<string>;
}

export interface CoresFind {
  asds_attempts?: Maybe<number>;

  asds_landings?: Maybe<number>;

  block?: Maybe<number>;

  id?: Maybe<string>;

  missions?: Maybe<string>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  rtls_attempts?: Maybe<number>;

  rtls_landings?: Maybe<number>;

  status?: Maybe<string>;

  water_landing?: Maybe<boolean>;
}

export interface HistoryFind {
  end?: Maybe<Date>;

  flight_number?: Maybe<number>;

  id?: Maybe<string>;

  start?: Maybe<Date>;
}

export interface LaunchFind {
  apoapsis_km?: Maybe<number>;

  block?: Maybe<number>;

  cap_serial?: Maybe<string>;

  capsule_reuse?: Maybe<string>;

  core_flight?: Maybe<number>;

  core_reuse?: Maybe<string>;

  core_serial?: Maybe<string>;

  customer?: Maybe<string>;

  eccentricity?: Maybe<number>;

  end?: Maybe<Date>;

  epoch?: Maybe<Date>;

  fairings_recovered?: Maybe<string>;

  fairings_recovery_attempt?: Maybe<string>;

  fairings_reuse?: Maybe<string>;

  fairings_reused?: Maybe<string>;

  fairings_ship?: Maybe<string>;

  gridfins?: Maybe<string>;

  id?: Maybe<string>;

  inclination_deg?: Maybe<number>;

  land_success?: Maybe<string>;

  landing_intent?: Maybe<string>;

  landing_type?: Maybe<string>;

  landing_vehicle?: Maybe<string>;

  launch_date_local?: Maybe<Date>;

  launch_date_utc?: Maybe<Date>;

  launch_success?: Maybe<string>;

  launch_year?: Maybe<string>;

  legs?: Maybe<string>;

  lifespan_years?: Maybe<number>;

  longitude?: Maybe<number>;

  manufacturer?: Maybe<string>;

  mean_motion?: Maybe<number>;

  mission_id?: Maybe<string>;

  mission_name?: Maybe<string>;

  nationality?: Maybe<string>;

  norad_id?: Maybe<number>;

  orbit?: Maybe<string>;

  payload_id?: Maybe<string>;

  payload_type?: Maybe<string>;

  periapsis_km?: Maybe<number>;

  period_min?: Maybe<number>;

  raan?: Maybe<number>;

  reference_system?: Maybe<string>;

  regime?: Maybe<string>;

  reused?: Maybe<string>;

  rocket_id?: Maybe<string>;

  rocket_name?: Maybe<string>;

  rocket_type?: Maybe<string>;

  second_stage_block?: Maybe<string>;

  semi_major_axis_km?: Maybe<number>;

  ship?: Maybe<string>;

  side_core1_reuse?: Maybe<string>;

  side_core2_reuse?: Maybe<string>;

  site_id?: Maybe<string>;

  site_name_long?: Maybe<string>;

  site_name?: Maybe<string>;

  start?: Maybe<Date>;

  tbd?: Maybe<string>;

  tentative_max_precision?: Maybe<string>;

  tentative?: Maybe<string>;
}

export interface MissionsFind {
  id?: Maybe<string>;

  manufacturer?: Maybe<string>;

  name?: Maybe<string>;

  payload_id?: Maybe<string>;
}

export interface PayloadsFind {
  apoapsis_km?: Maybe<number>;

  customer?: Maybe<string>;

  eccentricity?: Maybe<number>;

  epoch?: Maybe<Date>;

  inclination_deg?: Maybe<number>;

  lifespan_years?: Maybe<number>;

  longitude?: Maybe<number>;

  manufacturer?: Maybe<string>;

  mean_motion?: Maybe<number>;

  nationality?: Maybe<string>;

  norad_id?: Maybe<number>;

  orbit?: Maybe<string>;

  payload_id?: Maybe<string>;

  payload_type?: Maybe<string>;

  periapsis_km?: Maybe<number>;

  period_min?: Maybe<number>;

  raan?: Maybe<number>;

  reference_system?: Maybe<string>;

  regime?: Maybe<string>;

  reused?: Maybe<boolean>;

  semi_major_axis_km?: Maybe<number>;
}

export interface ShipsFind {
  id?: Maybe<string>;

  name?: Maybe<string>;

  model?: Maybe<string>;

  type?: Maybe<string>;

  role?: Maybe<string>;

  active?: Maybe<boolean>;

  imo?: Maybe<number>;

  mmsi?: Maybe<number>;

  abs?: Maybe<number>;

  class?: Maybe<number>;

  weight_lbs?: Maybe<number>;

  weight_kg?: Maybe<number>;

  year_built?: Maybe<number>;

  home_port?: Maybe<string>;

  status?: Maybe<string>;

  speed_kn?: Maybe<number>;

  course_deg?: Maybe<number>;

  latitude?: Maybe<number>;

  longitude?: Maybe<number>;

  successful_landings?: Maybe<number>;

  attempted_landings?: Maybe<number>;

  mission?: Maybe<string>;
}

export type Date = any;

export type ObjectId = any;

// ====================================================
// Documents
// ====================================================

export namespace GetLaunches {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    launchesPast: Maybe<(Maybe<LaunchesPast>)[]>;
  };

  export type LaunchesPast = {
    __typename?: "Launch";

    mission_name: Maybe<string>;

    details: Maybe<string>;

    links: Maybe<Links>;

    rocket: Maybe<Rocket>;

    ships: Maybe<(Maybe<Ships>)[]>;

    launch_success: Maybe<boolean>;
  };

  export type Links = {
    __typename?: "LaunchLinks";

    flickr_images: Maybe<(Maybe<string>)[]>;
  };

  export type Rocket = {
    __typename?: "LaunchRocket";

    name: Maybe<string>;
  };

  export type Ships = {
    __typename?: "Ship";

    id: Maybe<string>;
  };
}
