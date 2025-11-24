---
sidebar_position: 1
---

# Positioning Guide

## Minimum AP Distance

The minimum distance that two static AP's should be set up from one another is **30 meters** to avoid wireless noise affecting the streaming reliability.

This distance helps prevent interference between access points while still maintaining network connectivity.

## Trainer/Repeater AP Positioning

When mounting these APs on welded metal mesh or other structures, ensure that they are:

- ✅ **Not positioned in a wall depression** that would impact their line of sight to the neighboring nodes
- ✅ **Ideally on the outermost point** of a wall or obstacle
- ✅ **At a minimum, mounted higher** than the machine node on the training vehicle

### Antenna Orientation

Different antenna orientations provide different coverage patterns:

**Both Antennas Up** - Maximum direct range down a long drive run
**One Antenna Up, One Down** - Provides signal around a corner

## Trainer AP Distance

Deploy the trainer AP as far from the tablet as possible for the best operational coverage while:

- Maintaining line of sight to the tablet
- Ensuring strong WiFi signal strength (typically 50m range)
- Positioning in a safe area away from operational hazards

:::tip
**Trainer Positioning Strategy**: Trainer can monitor from a safer/more strategic distance while maintaining full system control.
:::

## Connection Monitoring

To monitor the connection after placing the APs:

1. **Check the Argus Application** (lower right corner) for network status
2. **Wait 1-2 minutes** — the network needs time to stabilize
3. **If performance is poor**, reposition the APs and repeat

### Network Health Indicators

- **Green**: Optimal connection
- **Orange**: Functional but sub-optimal
- **Red**: Poor connection requiring repositioning

## Extending Coverage Around Corners

To extend the coverage of the VTS around corners:

1. **Position Trainer or Repeater AP** at the corner
2. **Orient the two antennas**:
   - **Antenna 1**: Toward the vehicle travel path (provides coverage)
   - **Antenna 2**: Back to the previous static AP with clear line of sight (maintains network connection)

This configuration allows video to be transmitted through the "corner" location while maintaining the mesh network connection.

## Example Training Setup

For underground loader training with extended coverage:

```
                [Repeater AP]
                     |
                  30m min
                     |
        [Machine AP]------[Trainer AP + Tablet]
      (on vehicle)        (safe location)
```

- Machine AP: On rear of vehicle (radiator)
- Repeater AP: Midpoint of run, line of sight to both Machine and Trainer APs
- Trainer AP: Safe location, up to 200m away from Machine AP
- Coverage: Extends to training area and back to trainer

---

**Next**: [Setup & Operation Procedures](/docs/setup-operation)
