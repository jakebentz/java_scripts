//input parameter endpoint (VAPI:VAPIEndpoint
//input parameter tagName (string)
//input parameter caseSensitive (boolean)
//return type (CompositeType(Id:string,name:string,description:string,category_id:string,used_by:Array/string):tag)

var tagsResult = [];

if (endpoint == null) {
  throw "'endpoint' parameter should not be null";
}

var client = endpoint.client();
var tagging = new com_vmware_cis_tagging_tag(client);
var tags = tagging.list();

for each (t in tags) {
  var t = tagging.get(t);
  if (caseSensistive) {
    var tName = t.name;
  } else {
    var tName = t.name.toLowerCase();
    tagName = tagName.toLowerCase();
  }
  
  if (tagName == tName) {
    tagsResult.push(t);
  }
}

if (tagsResult.length > 1) { throw("Error: More than one tag found"); }
if (tagsResult.length < 1) { throw("Error: Could not find any tag by name: " + tagName); }

var tag = { Id:tagsResult[0].id, name:tagsResult[0].name, description:tagsResult[0].description, used_by:tagsResult[0].used_by,category_id:tagsResult[0].category_id }
return tag;
