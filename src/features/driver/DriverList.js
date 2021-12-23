import React, { useEffect, useCallback } from "react";
import { Driver } from "./Driver";
import { useDispatch, useSelector } from "react-redux";
import { next, previous, loadDrivers, selectDriver } from "./driverSlice";

export function DriverList() {
  const dispatch = useDispatch();
  const driverData = useSelector(selectDriver);
  const loadNextSetOfDrivers = useCallback(() => dispatch(next()), [dispatch]);
  const loadPrevSetOfDrivers = useCallback(
    () => dispatch(previous()),
    [dispatch]
  );

  // Component Init
  useEffect(() => {
    dispatch(loadDrivers());
  }, [dispatch]);

  if (driverData?.status === "loading") {
    return <div>Loading</div>;
  }

  if (driverData?.status !== "loading") {
    return (
      <div>
        {driverData?.currentPageDrives.map((driver) => (
          <Driver
            data={driver}
            key={`${driver.name.first}_${driver.name.last}_${driver.dob.date}`}
          />
        ))}

        <div>
          <button
            disabled={driverData.currentPage <= 0}
            onClick={loadPrevSetOfDrivers}
          >
            Previous
          </button>
          <button
            disabled={driverData.currentPage >= driverData.totalPages - 1}
            onClick={loadNextSetOfDrivers}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
