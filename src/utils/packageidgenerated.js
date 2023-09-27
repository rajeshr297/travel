import { Package } from '../db/models';

export async function packageidgen(
  destination_type,
  destination,
  stay_night,
  package_themes,
  package_budget,
  package_season_type,
  expired_date_package,
) {
  const finddestination = await Package.find({
    destination,
  });
  const destinationstypelice = (destination_type.length > 1 ? destination_type.slice(0, 2) : '').toUpperCase();
  const destinationslice = (destination.length > 1 ? destination.slice(0, 2) : '').toUpperCase();

  const stay_nightslice = (stay_night.length > 1 ? stay_night.slice(0, 2) : '').toUpperCase();

  const package_themesslice = (package_themes.length > 1 ? package_themes.slice(0, 2) : '').toUpperCase();

  const package_budgetslice = (package_budget.length > 1 ? package_budget.slice(0, 2) : '').toUpperCase();

  const package_season_typeslice = (package_season_type.length > 1 ? package_season_type.slice(0, 2) : '').toUpperCase();

  const auto_package_id = `${destinationstypelice}-${destinationslice}-${stay_nightslice}-${package_themesslice}-${package_budgetslice}-${expired_date_package}-${package_season_typeslice}-${finddestination.length > 0 ? finddestination.length + 1 : 0}`;
  return auto_package_id;
}
