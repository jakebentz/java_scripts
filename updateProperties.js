//define variables
virtualMachineId = payload.machine.get("id");

//get virtual machine entity from id
virtualMachineEntity = System.getModule("com.vmware.library.vcac").getVirtualMachineEntityFromId(host,virtualMachineId);

//Property names and values to update
propertyName = [name1, name2];
propertyValues = [value1, value2];

//Update properties
var n
System.log("Updating propertyNames: " + propertyName + " with propertyValues " + propertyValue);

for (n = 0; n < propertyName.length; n++ ){
System.log("Updating propertyName: " + propertyName[n] + " with propertyValue " + propertyValue[n]);
System.getModule("com.vmware.library.vcac").addUpdatePropertyFromVirtualMachineEntity(host,virtualMachineEntity,propertyName[n],propertyValue[n],propertyIsHidden,propertyIsRuntime,propertyIsEncrypted,doNotUpdate) ;
}
