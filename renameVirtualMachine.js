//input parameter virtualMachineEntity (vCAC:Entity)
//input parameter hostname (string)
//return type vCAC:Entity

System.log("Updating VirtualMachineName to '" + hostname + "'.");

//Get the properties of the vCAC VM Entity object (different than vCAC custom properties)
var vmEntityProps = virtualMachineEntity.getProperties();

//Change the VirtualMachineName property by deleting it and re-adding it
vmEntityProps.remove('VirtualMachineName');
vmEntityProps.put('VirtualMachineName', hostname);

//Update the Entity object to save the change
var hostId = virtualMachineEntity.hostId;
var modelName = virtualMachineEntity.modelName;
var entitySetName = virtualMachineEntity.entitySetName;
var entityIdString = virtualMachineEntity.keyString;
var actionResult = System.getModule("com.vmware.library.vcac").updateVCACEntity(hostId,modelName,entitySetName,entityIdString,vmEntityProps,null,null);

System.log("Update of VirtualMachineName finished.");

return actionResult;
