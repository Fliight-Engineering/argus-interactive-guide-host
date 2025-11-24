---
sidebar_position: 3
---

# Access Points

## Overview

Access points are wireless networking nodes that work together to create a mesh network. Designed for reliable video streaming in underground or offline locations where standard Wi-Fi isn't available.

### What is a Mesh Network?

A mesh network consists of multiple access points that work together to extend wireless coverage. Each access point can relay data from another, creating a self-healing network that adapts to obstacles and terrain.

## Types of Access Points

### Machine Access Point (AP)

The Machine Access Point is mounted on the training vehicle (typically on the rear, on top of the radiator for underground loaders).

**Purpose:**
- Provides wireless connectivity for vehicle-mounted cameras
- Acts as a bridge between cameras and the repeater/trainer access points
- Must maintain line-of-sight to other access points

**Setup:**
1. Pick the Machine AP up out of the hard case
2. Fold out the lower two antennas
3. Unclip the Antenna mast and rotate it towards the upward position
4. Pull the latch loop and engage the locking pin once the mast is in the vertical position
5. Rotate two of the antennas so that their elbow joints point upwards
6. Fold all antennas at their 45 degree latched position
7. Mount on vehicle and power on

### Trainer Access Point (AP-1)

The Trainer Access Point is positioned at the trainer's safe location.

**Purpose:**
- Creates WiFi hotspot for trainer tablet connection
- Extends mesh network reach toward trainer
- Provides trainer with safe viewing position

**WiFi Details:**
- **Name**: ARGUS-VTS-XXX (XXX = kit number)
- **Password**: BarmincoVTS
- **Range**: Up to 50 meters with line of sight

### Repeater Access Point

Repeater access points extend network coverage around corners and over longer distances (200m+).

![Repeater/Trainer AP Hardware](/img/vts-guide/image1.png)

*Repeater/Trainer Access Point with magnetic feet for mounting*

![Repeater AP Antenna Configurations](/img/vts-guide/image10.png) ![Repeater AP Corner Setup](/img/vts-guide/image11.png)

*Two antenna configuration options:  
Left: Both antennas up for maximum direct range down long drive  
Right: One antenna up, one down for signal coverage around corners*

**Purpose:**
- Extends mesh network coverage over long distances or around corners
- Positioned between Machine AP and Trainer AP (or at corners)
- Acts as relay point for network traffic

**Mounting:**
- Magnetic feet that double as mounting hooks onto mesh
- Can be bolted to plates or hooked onto mesh panels
- Place at height equal to or higher than Machine AP
- Must maintain line of sight to neighboring APs
- Not positioned in wall depressions

**Antenna Configuration:**
- **Configuration 1 (Both Up)**: Maximum direct range down a long straight drive
- **Configuration 2 (One Up/One Down)**: Provides signal coverage around a corner

## Battery Life

- **Minimum 10 hours** of operation per battery
- Uses standard **18V, 6Ah Milwaukee battery packs**
- Swap batteries between training sessions for continuous operation
- Each kit should have multiple batteries for rotation

## Positioning & Deployment

- Position multiple Access Points throughout your training area
- Units automatically connect to form a mesh network
- No cables or fixed infrastructure required
- Maintain minimum 30 meter distance between static APs to avoid wireless interference

## Power On & Startup Order

**Always turn on Access Points FIRST before powering up other system components.**

### Steps

1. Press the large black power button firmly
2. Release the button
3. Wait for the access point to initialise
4. Watch for status of the LED (see LED indicators below)
5. Repeat for all access points in your network

### Status LED Indicators

| LED Status | Color | Meaning |
|-----------|-------|---------|
| Initializing | Pulsing RGB | System starting up |
| Ready | Solid Blue | Unit powered up |
| Connected | Solid Green | Meshed with other nodes |

:::note
Quick Tip: Turn on all Access Points before starting cameras or other equipment to ensure the mesh network is fully established.
:::

## What's Next?

- [Understanding Network Positioning](positioning)
- [RCS Placement and Camera Setup](/docs/remote-camera-systems/)
- [Full Setup Procedure](/docs/setup-operation/)
